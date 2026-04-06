'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

function RevealOnScroll({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const trustSignals = [
  { value: '4.9', unit: '★', label: 'Google Rating', sub: '200+ reviews' },
  { value: '98', unit: '%', label: 'Pass Rate', sub: 'First attempt' },
  { value: '10', unit: '+', label: 'Years Teaching', sub: 'Fully qualified ADI' },
  { value: '500', unit: '+', label: 'Students Passed', sub: 'And counting' },
]

const steps = [
  {
    number: '01',
    title: 'Book Online',
    desc: 'Pick your lesson type and time slot. Secure payment in under 2 minutes.',
    icon: '📅',
  },
  {
    number: '02',
    title: 'Learn Your Way',
    desc: 'Patient, structured lessons tailored to how you learn. No pressure, just progress.',
    icon: '🚗',
  },
  {
    number: '03',
    title: 'Pass & Drive',
    desc: 'With the right preparation, your test day feels like just another lesson.',
    icon: '🏆',
  },
]

const courses = [
  {
    title: 'Standard Lessons',
    desc: 'Flexible 1 or 2 hour lessons around your schedule. Perfect for beginners and returners.',
    price: '£38',
    tag: 'Most Popular',
    tagStyle: 'bg-amber-400 text-black',
    border: 'border-white/10',
    hover: 'hover:border-amber-400/40',
  },
  {
    title: 'Intensive Course',
    desc: 'Pass in weeks not months. Daily lessons for learners who want fast, structured results.',
    price: 'POA',
    tag: 'Fast Track',
    tagStyle: 'bg-white/10 text-white border border-white/20',
    border: 'border-white/10',
    hover: 'hover:border-white/30',
  },
  {
    title: 'Motorway Lessons',
    desc: 'Build real confidence at high speed. Available for newly qualified drivers post-test.',
    price: '£45',
    tag: 'Post-Pass',
    tagStyle: 'bg-white/10 text-white border border-white/20',
    border: 'border-white/10',
    hover: 'hover:border-white/30',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Passed first time · Hounslow',
    quote: 'I was so nervous but the calm structured approach made everything click. Passed first time with only 2 minors.',
    stars: 5,
    initial: 'S',
  },
  {
    name: 'James T.',
    location: 'Passed first time · Feltham',
    quote: 'Best instructor I have had. Always knew exactly what I needed to work on. Never felt rushed.',
    stars: 5,
    initial: 'J',
  },
  {
    name: 'Priya K.',
    location: 'Intensive course · Twickenham',
    quote: 'Booked an intensive and passed in 3 weeks. Absolutely brilliant from the very first lesson.',
    stars: 5,
    initial: 'P',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="overflow-x-hidden bg-[#080808]">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Parallax background image */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=90"
            alt="Driving lesson"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer dark overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>

        {/* Amber accent line — left edge */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-gradient-to-b from-transparent via-amber-400 to-transparent origin-top"
        />

        {/* Hero content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative max-w-6xl mx-auto px-5 pt-32 pb-24 w-full"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              DVSA Approved · [Town] & Surrounding Areas
            </span>
          </motion.div>

          {/* Headline — cinematic word-by-word */}
          <h1 className="font-black text-white leading-[0.95] tracking-tighter mb-8 overflow-hidden">
            {[
              { text: 'Learn to', color: 'text-white', size: 'text-7xl md:text-9xl' },
              { text: 'Drive.', color: 'text-white', size: 'text-7xl md:text-9xl' },
              { text: 'Pass', color: 'text-amber-400', size: 'text-7xl md:text-9xl' },
              { text: 'First Time.', color: 'text-amber-400', size: 'text-6xl md:text-8xl' },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${line.size} ${line.color}`}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Professional driving lessons in [Town] with a patient, fully
            qualified instructor. Flexible hours, unbeatable pass rates.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-1 text-base uppercase tracking-wide"
            >
              Book a Lesson
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lg"
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center border border-white/25 hover:border-white/60 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:bg-white/5 text-base uppercase tracking-wide"
            >
              View Courses
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-10 right-5 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 bg-amber-400 rounded-full" />
            </motion.div>
            <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0f0f0f] border-y border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {trustSignals.map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center py-6 px-4 border-r border-white/5 last:border-0">
                  <div className="flex items-end gap-0.5 mb-2">
                    <span className="text-white font-black text-4xl leading-none">{item.value}</span>
                    <span className="text-amber-400 font-black text-2xl leading-none mb-0.5">{item.unit}</span>
                  </div>
                  <p className="text-white/80 font-semibold text-sm">{item.label}</p>
                  <p className="text-white/30 text-xs mt-1">{item.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#080808] py-32">
        <div className="max-w-6xl mx-auto px-5">
          <RevealOnScroll className="mb-20">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">The Process</span>
            </div>
            <h2 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-tight">
              Three steps.<br />
              <span className="text-white/30">That simple.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.number} delay={i * 0.15}>
                <div className="group relative bg-[#111] border border-white/8 rounded-3xl p-10 hover:border-amber-400/30 hover:bg-[#141414] transition-all duration-500 overflow-hidden">
                  {/* Large number watermark */}
                  <span className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.03] leading-none select-none group-hover:text-amber-400/5 transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl mb-8 group-hover:bg-amber-400/20 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Bottom amber line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-amber-400 rounded-full"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5">
          <RevealOnScroll className="mb-20">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-8 bg-amber-400" />
                  <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
                </div>
                <h2 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-tight">
                  Find your<br />
                  <span className="text-white/30">perfect course.</span>
                </h2>
              </div>
              <Link
                href="/courses"
                className="self-end inline-flex items-center gap-2 text-white/50 hover:text-amber-400 text-sm font-semibold transition-colors duration-200 border-b border-white/10 hover:border-amber-400 pb-1"
              >
                View all courses →
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map((course, i) => (
              <RevealOnScroll key={course.title} delay={i * 0.15}>
                <div
                  className={`group relative bg-[#111] border ${course.border} ${course.hover} rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full overflow-hidden`}
                >
                  <span className={`self-start text-xs font-bold px-3 py-1.5 rounded-full mb-6 ${course.tagStyle}`}>
                    {course.tag}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-3">{course.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{course.desc}</p>
                  <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
                    <div>
                      <span className="text-white/30 text-xs block">From</span>
                      <span className="text-white font-black text-3xl">{course.price}</span>
                      {course.price !== 'POA' && <span className="text-white/30 text-sm">/hr</span>}
                    </div>
                    <Link
                      href="/courses"
                      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200 group-hover:border-amber-400/50"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#080808] py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5">
          <RevealOnScroll className="mb-20">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Student Reviews</span>
            </div>
            <h2 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-tight">
              Don't take<br />
              <span className="text-white/30">our word for it.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 0.15}>
                <div className="group bg-[#111] border border-white/8 hover:border-white/15 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-black text-sm flex-shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/30 text-xs mt-0.5">{t.location}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5">
          <RevealOnScroll>
            <div className="relative rounded-3xl overflow-hidden">
              {/* CTA background image */}
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Amber glow */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 60%)' }}
              />

              <div className="relative px-10 md:px-20 py-20 md:py-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-amber-400" />
                  <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Ready to Start?</span>
                </div>
                <h2 className="text-white font-black text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8 max-w-2xl">
                  Your licence is closer than you think.
                </h2>
                <p className="text-white/50 text-lg mb-12 max-w-lg leading-relaxed">
                  Join hundreds of students who passed with DriveRight. Flexible booking, no long commitment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/25 hover:-translate-y-1 text-base uppercase tracking-wide"
                  >
                    Pay in Full & Book Now
                  </Link>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:bg-white/5 text-base uppercase tracking-wide"
                  >
                    Reserve with £50 Deposit →
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  )
}
