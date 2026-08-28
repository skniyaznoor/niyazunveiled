'use client';

import { useRouter } from 'next/navigation';

export default function BackButton({ className, style }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className={className} 
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        ...style
      }}
    >
      &larr; Back
    </button>
  );
}
