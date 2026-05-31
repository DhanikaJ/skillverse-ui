import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function CourseDetailPage() {
  const { id } = useParams();
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEnroll = async () => {
    try {
      setLoading(true);
      setError("");

      await api.post(`/enroll/${id}`);
      setEnrolled(true);
    } catch (err) {
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
    <div className="p-6">
      <h1 className="text-3xl font-bold">Course Detail Page</h1>

      <p className="mt-4 text-xl">Course ID: {id}</p>

      <button
        type="button"
        onClick={handleEnroll}
        disabled={loading || enrolled}
        className="mt-6 rounded bg-blue-600 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Enrolling..." : enrolled ? "Enrolled!" : "Enroll"}
      </button>

      {error && <p className="mt-3 text-red-600">{error}</p>}
    </div>
  );
}

export default CourseDetailPage;
