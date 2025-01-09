"use client"

// components/FadeInSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/FadeInSection.module.css';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.2,    // Quantos % do elemento precisa estar visível
  });

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${inView ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
