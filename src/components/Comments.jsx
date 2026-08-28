'use client';

import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import GoogleSignIn from './GoogleSignIn';

export default function Comments({ slug }) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, 'comments'),
      where('slug', '==', slug)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      // Sort comments in memory to avoid needing a Firestore composite index
      fetchedComments.sort((a, b) => {
        const timeA = a.createdAt?.toMillis() || 0;
        const timeB = b.createdAt?.toMillis() || 0;
        return timeA - timeB;
      });

      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'comments'), {
        slug,
        text: newComment,
        userName: user.displayName,
        userPhoto: user.photoURL,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)' }}>
      <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
        Comments ({comments.length})
      </h3>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ display: 'flex', gap: '12px', padding: '16px', background: 'var(--paper-2)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
            {comment.userPhoto ? (
              <img src={comment.userPhoto} alt={comment.userName} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            ) : (
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)', fontWeight: 'bold' }}>
                {comment.userName?.charAt(0) || '?'}
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <strong style={{ color: 'var(--ink)' }}>{comment.userName}</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                  {comment.createdAt?.toDate ? comment.createdAt.toDate().toLocaleDateString() : 'Just now'}
                </span>
              </div>
              <p style={{ color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{comment.text}</p>
            </div>
          </div>
        ))}
        {comments.length === 0 && <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>No comments yet. Be the first to share your thoughts!</p>}
      </div>

      {user ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            required
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontFamily: 'inherit', resize: 'vertical' }}
          />
          <button type="submit" className="btn btn-primary" disabled={loading || !newComment.trim()} style={{ alignSelf: 'flex-start' }}>
            {loading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      ) : (
        <div style={{ padding: '2rem', background: 'var(--paper-2)', borderRadius: '8px', textAlign: 'center', border: '1px dashed var(--border-color)' }}>
          <p style={{ color: 'var(--ink)', marginBottom: '1rem' }}>Sign in to join the conversation.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleSignIn />
          </div>
        </div>
      )}
    </div>
  );
}
