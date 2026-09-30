'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';



export default function FeedbackClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fbData = [];
      snapshot.forEach((doc) => {
        fbData.push({ id: doc.id, ...doc.data() });
      });
      setFeedbacks(fbData);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const newFeedback = {
      name: formData.get('name') || 'Anonymous',
      email: formData.get('email') || '',
      message: formData.get('message'),
      createdAt: serverTimestamp()
    };
    
    try {
      await addDoc(collection(db, 'feedback'), newFeedback);
      setIsSubmitting(false);
      setSubmitted(true);
      e.target.reset(); // clear the form for the next submission
    } catch (error) {
      console.error("Error adding feedback: ", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section style={{ padding: '84px 0', background: 'var(--paper)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '720px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow">Whispers from Readers</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', margin: '10px 0 16px', color: 'var(--ink)' }}>Reader Thoughts</h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '1.15rem', fontFamily: 'var(--font-body)', lineHeight: '1.7', maxWidth: '48ch', margin: '0 auto' }}>
            A collection of feelings, thoughts, and quiet moments shared by those who have walked alongside these stories.
          </p>
        </div>

        {/* Existing Feedbacks */}
        <div style={{ display: 'grid', gap: '24px', marginBottom: '84px' }}>
          {feedbacks.map(fb => {
            const displayDate = fb.createdAt && fb.createdAt.toDate 
              ? fb.createdAt.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              : (fb.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
              
            return (
              <div key={fb.id} style={{ background: 'var(--paper-2)', padding: '32px 36px', borderRadius: '8px', border: '1px solid var(--line)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.18rem', color: 'var(--ink)', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.65' }}>
                  "{fb.message}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', color: 'var(--berry)', fontSize: '1.1rem' }}>— {fb.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--ink-soft)' }}>{displayDate}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Section */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow">Share Your Story</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', margin: '10px 0 16px', color: 'var(--ink)' }}>Leave a Whisper</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.05rem', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
              Did a story make you smile? Did it leave an ache? I'd love to hear how these words made you feel.
            </p>
          </div>

          {submitted ? (
            <div style={{ background: 'var(--paper-2)', padding: '50px 40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid var(--line)', textAlign: 'center' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--sage)', marginBottom: '20px' }}>
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '16px', color: 'var(--ink)' }}>Thank you for sharing</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: '1.05rem', fontFamily: 'var(--font-body)', marginBottom: '32px' }}>
                Your words have been added above. It means the world to me.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-ghost">
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'var(--paper-2)', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid var(--line)' }}>
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-body)', color: 'var(--ink)' }}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="How should I call you?"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--ink)', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--berry)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--line)'}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-body)', color: 'var(--ink)' }}>Your Email <span style={{ color: 'var(--ink-soft)', fontSize: '0.85rem' }}>(optional)</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--ink)', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--berry)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--line)'}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-body)', color: 'var(--ink)' }}>Your Thoughts</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  required
                  placeholder="What did you think of the story?"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--line)', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--ink)', resize: 'vertical', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--berry)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--line)'}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
          )}
        </div>

        <div style={{ marginTop: '72px', textAlign: 'center' }}>
          <p className="marginalia" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.4rem', color: 'var(--ink-soft)', maxWidth: 'none', margin: '0 auto' }}>
            "A writer only finishes half the story. The reader finishes the rest."
          </p>
        </div>
      </div>
    </section>
  );
}
