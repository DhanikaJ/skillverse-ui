import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import api from "../../services/api";
import type { Course, PaginatedResponse } from "../../types";

function CourseList() {
  const [search, setSearch] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get<PaginatedResponse<Course>>("/courses", {
          params: { page: 0, size: 10 },
        });
        setCourses(response.data.content || []);
      } catch (error: any) {
        const status = error?.response?.status;

        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error("Failed to load courses", error);
        }

        if (status === 403) {
          setError("Access denied while loading courses. Please log in again.");
        } else {
          setError("Failed to load courses. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Loading courses...</div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-6 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            pricelevel={course.pricelevel}
            difficulty={course.difficulty}
            price={course.price}
            thumbnail={course.thumbnail}
            created_at={course.created_at}
            status={course.status}
            users={course.users}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;