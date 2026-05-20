import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import api from "../../services/api";
import type { Course } from "../../types";

interface CoursesPageResponse {
  content: Course[];
}

function CourseList() {
  const [search, setSearch] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get<CoursesPageResponse>("/courses", {
          params: { page: 0, size: 10 },
        });
        setCourses(response.data.content || []);
      } catch (error) {
        console.error("Failed to load courses", error);
        setError("Failed to load courses. Please try again later.");
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
      <div className="flex gap-6 flex-wrap">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            instructor={course.instructor}
            price={course.price}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;