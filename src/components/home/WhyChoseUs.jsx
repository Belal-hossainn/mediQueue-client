"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Booking",
    desc: "Book Sessions in seconds without any hassle.",
  },
  {
    title: "Expert Tutors",
    desc: "All tutors are verified and highly experienced.",
  },
  {
    title: "Easy Queue System",
    desc: "Smart queue management to save your valuable time.",
  },
  {
    title: "24/7 Support",
    desc: "We are always here to help you anytime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-slate-800"
        >
          Why Choose Us
        </motion.h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
            >
              <h3 className="text-lg font-medium text-slate-800 group-hover:text-sky-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* small accent line */}
              <div className="mt-4 mx-auto h-[2px] w-10 bg-sky-200 group-hover:bg-sky-400 transition-all rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}