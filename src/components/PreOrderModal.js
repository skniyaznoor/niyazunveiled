'use client';

import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

export default function PreOrderModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, 'preorders'), {
        name,
        email,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
    } catch (err) {
      console.error('Error adding preorder:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', zIndex: 9999, padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--paper-2)', padding: '40px', borderRadius: '8px',
        maxWidth: '400px', width: '100%', position: 'relative', boxShadow: 'var(--shadow)'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--ink-soft)' }}
        >
          &times;
        </button>
        
        {success ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--berry)', marginBottom: '16px' }}>Thank you!</h2>
            <p style={{ color: 'var(--ink)' }}>Your pre-order has been registered. We'll send you an email on September 23rd, 2026 when the novel launches!</p>
            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '20px' }}>Close</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--ink)', marginBottom: '16px' }}>Pre-order "A love story"</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '24px', fontSize: '0.95rem' }}>Leave your details below to get notified the moment the novel launches on September 23rd, 2026.</p>
            
            {error && <p style={{ color: 'red', marginBottom: '16px', fontSize: '0.9rem' }}>{error}</p>}
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--ink)' }}>Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--ink)' }}>Email Address</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }}
                />
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '10px' }}>
                {loading ? 'Submitting...' : 'Confirm Pre-order'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
