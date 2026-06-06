import React from "react";
import { Link } from "react-router-dom";

const animations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
    50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scale-in {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  .animate-scale-in {
    animation: scale-in 0.6s ease-out forwards;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
`;

export default function HomeIndexPage() {
  return (
    <>
      <style>{animations}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-gradient-to-r from-amber-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Navigation Bar */}
        <nav className="relative z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SkillVerse
                </span>
              </div>
              <div className="flex items-center gap-6">
                <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Courses
                </Link>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-blue-800">New courses available</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  <span className="text-slate-900">Master New </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Skills Today
                  </span>
                </h1>

                <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Discover curated learning paths, track your progress with real-time analytics, 
                  and join thousands of learners building their future with hands-on courses.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/courses"
                    className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <Link
                    to="/dashboard"
                    className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-lg hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    View Dashboard
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold"
                        style={{ zIndex: 10 - i }}
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-bold text-slate-900">4.9/5</span> from 2,000+ learners
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-2xl border border-white/50">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-20" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-20 blur-xl" />

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose SkillVerse?</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600 mt-1">Expert Courses</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-purple-600">4.8★</div>
                      <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-emerald-600">95%</div>
                      <div className="text-sm text-gray-600 mt-1">Completion Rate</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-amber-600">24/7</div>
                      <div className="text-sm text-gray-600 mt-1">Access & Support</div>
                    </div>
                  </div>

                  {/* Progress visualization */}
                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">Your Learning Journey</span>
                      <span className="text-sm font-bold text-blue-600">75%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-lg animate-float">
                  ✨ Top Rated
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-4">
                Features
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Everything You Need to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Succeed</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A complete learning platform designed to help you achieve your goals faster.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Lightning Fast Enrollment",
                  desc: "Sign up and start learning in under 60 seconds. No complicated processes.",
                  color: "from-amber-500 to-orange-500",
                  bgColor: "bg-amber-50",
                  borderColor: "border-amber-200",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Real-Time Progress Tracking",
                  desc: "Visualize your growth with detailed analytics and milestone celebrations.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Smart Learning Paths",
                  desc: "AI-powered recommendations tailored to your goals and learning style.",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  title: "Hands-On Projects",
                  desc: "Build real-world applications and portfolio pieces as you learn.",
                  color: "from-emerald-500 to-teal-500",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Community Support",
                  desc: "Join study groups, get mentorship, and collaborate with peers worldwide.",
                  color: "from-rose-500 to-red-500",
                  bgColor: "bg-rose-50",
                  borderColor: "border-rose-200",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: "Verified Certificates",
                  desc: "Earn industry-recognized certificates to showcase your achievements.",
                  color: "from-indigo-500 to-blue-500",
                  bgColor: "bg-indigo-50",
                  borderColor: "border-indigo-200",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`} />

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Preview */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold text-sm mb-4">
                Popular Courses
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Start Your Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our most popular courses and find the perfect starting point.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Web Development', level: 'Beginner', students: '2.4k', color: 'from-blue-500 to-cyan-500' },
                { title: 'Data Science', level: 'Intermediate', students: '1.8k', color: 'from-purple-500 to-pink-500' },
                { title: 'Mobile Apps', level: 'Advanced', students: '1.2k', color: 'from-emerald-500 to-teal-500' },
                { title: 'AI & ML', level: 'All Levels', students: '3.1k', color: 'from-amber-500 to-orange-500' },
              ].map((course) => (
                <Link
                  key={course.title}
                  to="/courses"
                  className="group block p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${course.color} mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                    <span className="text-white text-4xl font-bold">{course.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-gray-600">{course.level}</span>
                    <span className="text-gray-500">{course.students} students</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Join thousands of learners who are already building their future with SkillVerse.
                Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-bold">SkillVerse</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering learners worldwide with practical, industry-relevant skills.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} SkillVerse. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}