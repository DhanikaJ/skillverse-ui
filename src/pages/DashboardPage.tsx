import { useEffect, useState } from "react";
import api from "../services/api";
import type { EnrollmentResponse } from "../types";

function formatDate(value: string | Date) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "Recently";
    }

    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function DashboardPage() {
    const [enrollments, setEnrollments] = useState<EnrollmentResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await api.get<EnrollmentResponse[]>(
                    "/users/me/enrollments",
                );
                setEnrollments(response.data || []);
            } catch (err: any) {
                console.error("Failed to load enrollments", err);
                const message =
                    err?.response?.data?.message ||
                    err?.response?.data?.error ||
                    err?.message ||
                    "Failed to load your enrolled courses.";

                setError(message);
            } finally {
                setLoading(false);
            }
        };

        fetchEnrollments();
    }, []);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600">Your enrolled courses in one place.</p>
            </div>

            {loading && <p className="text-gray-600">Loading your courses...</p>}

            {!loading && error && <p className="text-red-600">{error}</p>}

            {!loading && !error && enrollments.length === 0 && (
                <div className="rounded-xl border border-dashed p-8 text-center text-gray-600">
                    You are not enrolled in any courses yet.
                </div>
            )}

            {!loading && !error && enrollments.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {enrollments.map((enrollment) => (
                        <div
                            key={enrollment.id}
                            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
                        >
                            <img
                                src={enrollment.course.thumbnail}
                                alt={enrollment.course.title}
                                className="h-44 w-full object-cover"
                            />
                            <div className="space-y-3 p-5">
                                <div>
                                    <h2 className="text-xl font-semibold">{enrollment.course.title}</h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {enrollment.course.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>Progress</span>
                                    <span className="font-medium text-gray-900">{enrollment.progress}%</span>
                                </div>

                                <div className="h-2 rounded-full bg-gray-200">
                                    <div
                                        className="h-2 rounded-full bg-blue-600"
                                        style={{ width: `${Math.max(0, Math.min(100, enrollment.progress))}%` }}
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                                        {enrollment.statusType}
                                    </span>
                                    <span className="text-gray-500">Enrolled {formatDate(enrollment.enrolled_at)}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>{enrollment.course.pricelevel}</span>
                                    <span>{enrollment.course.difficulty}</span>
                                    <span className="font-semibold text-green-600">${enrollment.course.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DashboardPage;