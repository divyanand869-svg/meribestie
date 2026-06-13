'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FinalSection() {
  const [stars, setStars] = useState<
    { id: number; left: number; top: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 40 + 30,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink-950 overflow-hidden" id="final">
      <div className="particle-field">
        {stars.map((s) => (
          <motion.span
            key={s.id}
            className="ambient-particle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
            }}
            animate={{
              x: [0, 40, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="font-display italic text-xl md:text-3xl text-paper-200 leading-relaxed"
        >
          This website was never meant to impress you_ Ya kya pata uske liye hi hoo!! LOL.
          <br />
          It was built to preserve a friendship.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 1.4 }}
          className="heading-display text-5xl md:text-7xl text-gold-light"
        >
          Thankyou for being my friend.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 2.6 }}
          className="eyebrow"
        >
          — Your Professional Irritator
        </motion.p>
      </div>
    </section>
  );
}
