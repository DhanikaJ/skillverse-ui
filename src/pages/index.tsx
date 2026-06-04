import React from "react";
import { Link } from "react-router-dom";

export default function HomeIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                Learn faster. Build smarter.
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                SkillVerse — Courses that take you from <span className="text-amber-200">0 → ready</span>
              </h1>

              <p className="mt-4 max-w-xl text-white/90">
                Explore curated learning paths, track your progress, and enroll in
                hands-on courses designed for real outcomes.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
                >
                  Browse Courses
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-white/15 px-5 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="text-2xl font-bold text-white">+50</div>
                  <div className="mt-1 text-sm text-white/90">Practical topics</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="text-2xl font-bold text-white">4.8★</div>
                  <div className="mt-1 text-sm text-white/90">Learner satisfaction</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="text-2xl font-bold text-white">On track</div>
                  <div className="mt-1 text-sm text-white/90">Progress tracking</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="text-2xl font-bold text-white">Quizzes</div>
                  <div className="mt-1 text-sm text-white/90">Assessments & feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div>
          <h2 className="text-3xl font-bold">Everything you need to learn</h2>
          <p className="mt-2 text-gray-600">
            A clean experience from discovery to completion.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Enroll in minutes",
              desc: "Find courses, enroll, and start learning right away.",
            },
            {
              title: "Track your progress",
              desc: "Stay motivated with progress updates and course status.",
            },
            {
              title: "Learn with clarity",
              desc: "Structured lessons, quizzes, and practical resources.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold">{f.title}</div>
              <div className="mt-2 text-sm text-gray-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 ring-1 ring-blue-100">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Ready to start?</h3>
              <p className="mt-2 text-gray-600">
                Enroll today and keep building momentum.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/courses"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Enroll Now
              </Link>
              <Link
                to="/login"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-50"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SkillVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


