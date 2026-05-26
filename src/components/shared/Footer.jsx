"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sky-100 bg-gradient-to-b from-white to-sky-50">

      {/* background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-100/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100/40 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">

        {/* top section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight text-sky-600"
            >
              MediQueue
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-slate-500 max-w-xs">
              Find skilled tutors, book sessions instantly,
              and learn smarter from anywhere.
            </p>

            {/* social icons */}
            <div className="flex items-center gap-3 mt-6">

              <Link
                href="/"
                className="w-10 h-10 rounded-xl border border-sky-100 bg-white flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition"
              >
                <FaFacebookF size={15} />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-xl border border-sky-100 bg-white flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition"
              >
                <FaInstagram size={15} />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-xl border border-sky-100 bg-white flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition"
              >
                <FaTwitter size={15} />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-xl border border-sky-100 bg-white flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition"
              >
                <FaLinkedinIn size={15} />
              </Link>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <Link href="/" className="hover:text-sky-600 transition">
                Home
              </Link>

              <Link
                href="/tutors"
                className="hover:text-sky-600 transition"
              >
                Find Tutors
              </Link>

              <Link
                href="/about"
                className="hover:text-sky-600 transition"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="hover:text-sky-600 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* subjects */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-5">
              Popular Subjects
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <p>Mathematics</p>
              <p>English</p>
              <p>Programming</p>
              <p>Science</p>
            </div>
          </div>

          {/* newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-5">
              Newsletter
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Get learning tips and tutor updates directly in your inbox.
            </p>

            <div className="flex items-center rounded-2xl border border-sky-100 bg-white overflow-hidden shadow-sm">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm outline-none bg-transparent"
              />

              <button className="px-5 py-3 bg-sky-600 text-white text-sm hover:bg-sky-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 pt-6 border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © 2026 MediQueue. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-sky-600 transition">
              Privacy
            </Link>

            <Link href="/" className="hover:text-sky-600 transition">
              Terms
            </Link>

            <Link href="/" className="hover:text-sky-600 transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}