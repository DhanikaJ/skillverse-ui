import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

export default function CourseDetailPage() {
  const { id } = useParams();
  const courseId = useMemo(() => id ?? "", [id]);

  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEnroll = async () => {
    try {
      if (!courseId) return;
      setLoading(true);
      setError("");

      await api.post(`/enroll/${courseId}`);
      setEnrolled(true);
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Enrollment failed";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold text-indigo-600">Course</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Course Detail
        </h1>
        <p className="mt-2 text-slate-600">
          Placeholder design—wire real course data next.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                SkillVerse • Preview
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Course ID: {courseId || "—"}
              </h2>
              <p className="mt-2 text-slate-600">
                This page is ready for TypeScript + design. Replace the placeholders with
                real course fields.
              </p>
            </div>

            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Lessons", "Quizzes", "Resources", "Certificate"].map((t) => (
              <div
                key={t}
                className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-slate-700">{t}</p>
                <p className="mt-2 text-xs text-slate-500">Coming soon</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-b from-white to-indigo-50 p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-bold text-slate-900">Enrollment</h3>
          <p className="mt-2 text-sm text-slate-600">
            Enroll to start learning and track progress.
          </p>

          <button
            type="button"
            onClick={handleEnroll}
            disabled={loading || enrolled || !courseId}
            className="mt-6 w-full rounded-2xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Enrolling..." : enrolled ? "Enrolled!" : "Enroll"}
          </button>

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <p className="text-xs font-semibold text-slate-500">Tip</p>
            <p className="mt-1 text-sm text-slate-700">
              Token expiration is validated in <span className="font-semibold">ProtectedRoute</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

