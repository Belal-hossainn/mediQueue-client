"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Create Profile",
    desc: "Sign up as a student or tutor and build your profile easily.",
  },
  {
    title: "Browse Tutors",
    desc: "Search tutors by subject, rating, or availability.",
  },
  {
    title: "Book Session",
    desc: "Select time slot and confirm your tutoring session instantly.",
  },
  {
    title: "Start Learning",
    desc: "Join live session and improve your skills with expert guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-slate-800"
        >
          How It Works
        </motion.h2>

        <p className="text-slate-500 mt-3">
          Find the right tutor and start learning in minutes
        </p>

        {/* Steps */}
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-md hover:shadow-md transition"
            >
              {/* Step number */}
              <div className="w-9 h-9 mx-auto mb-4 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>

              <h3 className="text-sm font-semibold text-slate-800">
                {step.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                {step.desc}
              </p>

              {/* connector line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-12px] w-6 h-[2px] bg-sky-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}