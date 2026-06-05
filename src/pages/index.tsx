import React from "react";
import { Link } from "react-router-dom";

const glowKeyframes = `
  @keyframes floaty {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes shimmer {
    0% { transform: translateX(-30%); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translateX(30%); opacity: 0; }
  }
`;

export default function HomeIndexPage() {
  return (
    <>
      <style>{glowKeyframes}</style>

      <div className="min-h-screen bg-white text-slate-900">
        {/* Background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl" />
          <div className="absolute bottom-[-320px] left-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-amber-400/20 via-emerald-400/15 to-blue-500/10 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
            <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute right-10 top-10 h-52 w-52 rounded-full bg-amber-200/20 blur-2xl" />
          </div>

          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                  Learn faster. Build smarter.
                </div>

                <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                  SkillVerse - Courses that take you from{' '}
                  <span className="text-amber-200">0 → ready</span>
                </h1>

                <p className="mt-4 max-w-xl text-white/90">
                  Explore curated learning paths, track your progress, and enroll in
                  hands-on courses designed for real outcomes.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/courses"
                    className="group inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
                  >
                    <span className="relative z-10">Browse Courses</span>
                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute left-[-30%] top-1/2 h-16 w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 animate-[shimmer_1.1s_ease-in-out_infinite]" />
                    </span>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center rounded-xl bg-white/15 px-5 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                {/* Floating highlight */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-xl animate-[floaty_3.5s_ease-in-out_infinite]" />

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
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Everything you need to learn
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              A clean experience from discovery to completion.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Enroll in minutes",
                desc: "Find courses, enroll, and start learning right away.",
                icon: "⚡",
              },
              {
                title: "Track your progress",
                desc: "Stay motivated with progress updates and course status.",
                icon: "📈",
              },
              {
                title: "Learn with clarity",
                desc: "Structured lessons, quizzes, and practical resources.",
                icon: "🧠",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-xl" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-lg">
                    {f.icon}
                  </div>
                  <div className="text-lg font-semibold">{f.title}</div>
                </div>
                <div className="mt-2 text-sm text-gray-600">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 ring-1 ring-blue-100">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Ready to start?</h3>
                <p className="mt-2 text-gray-600">
                  Enroll today and keep building momentum.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/courses"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
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
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} SkillVerse. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}



