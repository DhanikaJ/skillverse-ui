import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

function CourseList() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          title: "React for Beginners",
          instructor: "John Doe",
          price: 49,
          imageUrl: "https://picsum.photos/300/200?1",
        },
        {
          id: 2,
          title: "Spring Boot Masterclass",
          instructor: "Jane Smith",
          price: 79,
          imageUrl: "https://picsum.photos/300/200?2",
        },
        {
          id: 3,
          title: "Docker Essentials",
          instructor: "Alex Johnson",
          price: 59,
          imageUrl: "https://picsum.photos/300/200?3",
        },
      ];

      setCourses(data);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Loading courses...</div>
    );
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
