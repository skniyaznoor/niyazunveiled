'use client';

import React, { useState } from 'react';
import PreOrderModal from './PreOrderModal';

export default function PreOrderButton({ className, style, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className={className} 
        style={style} 
        onClick={() => setIsModalOpen(true)}
      >
        {children}
      </button>
      <PreOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
