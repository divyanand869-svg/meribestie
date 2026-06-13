'use client';

import { motion } from 'framer-motion';

const observations = [
  'You pretend not to care. You actually care a lot.',
  'You are competitive in places where competition doesn\u2019t even exist.',
  'You somehow manage to be responsible and chaotic at the same time.',
  'You can be incredibly annoying. Unfortunately, so can I.',
  'You apologize by changing the subject, never by saying sorry.',
  'You remember things you claim not to remember, the moment it benefits you.',
  'You have a very specific laugh reserved for when you\u2019re trying not to laugh.',
  'You give advice you would never personally follow.',
  'You take "fine" and somehow turn it into a four-part argument.',
  'You are weirdly loyal to people who don\u2019t deserve it, including me sometimes.',
  'You overthink things that don\u2019t matter and underthink things that do.',
  'You act unbothered right up until the exact moment you are very bothered.',
  'You\u2019re the kind of person who says "whatever" and means the opposite.',
  'You hold grudges for sport, then forget why within a week.',
  'You\u2019re more sentimental than you\u2019ll ever admit out loud.',
  'You give terrible directions with complete confidence.',
  'You have never once let me win an argument, even when I was right.',
  'You show up. Every single time, you show up.',
];

export default function Observations() {
  return (
    <section className="section-shell bg-ink-900/40" id="learned">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-4">Field Notes</p>
          <h2 className="heading-display text-4xl md:text-6xl text-paper-100">
            Things I Learned About You
          </h2>
          <p className="mt-4 text-paper-300/70 font-body max-w-lg">
            Collected over time. Unverified by you. Accurate anyway.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-gold/10 rounded-sm overflow-hidden">
          {observations.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className="bg-ink-950 p-6 md:p-8 hover:bg-ink-900 transition-colors duration-500"
              data-cursor-hover
            >
              <span className="font-display text-gold/40 text-sm mr-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-sub text-base md:text-lg text-paper-200 leading-relaxed inline">
                {line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
