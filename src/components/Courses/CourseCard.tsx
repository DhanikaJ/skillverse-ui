import type { Status, User } from "../../types";
import "./CourseCard.css";
import { Link } from "react-router-dom";

interface CourseProps {
  id: number;
  title: string;
  description: string;
  pricelevel: string;
  difficulty: string;
  price: number;
  thumbnail: string;
  created_at: string | Date;
  status: Status | null;
  users: User[] | null;
}

export default function CourseCard({ id, title, description, pricelevel, difficulty, price, thumbnail, created_at, status, users }: CourseProps) {
  const enrolledUsers = users ?? [];

  return (
    <Link to={`/courses/${id}`}>
      <div className="course-card border rounded-xl p-4 shadow-md w-full min-w-70 flex-1">
        <div className="course-card-content">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="course-title text-xl font-bold mt-3">{title}</h2>

          <p className="text-gray-600">{description}</p>

          <p>Instructor: {enrolledUsers[0]?.fname} {enrolledUsers[0]?.lname}</p>

          <p className="text-gray-600">{enrolledUsers.length} students enrolled</p>

          <p className="text-sm text-gray-500 mt-2">
            Difficulty: {difficulty} | Price Level: {pricelevel}
          </p>

          <p className="text-gray-600">{status?.type ?? "Status unavailable"}</p>

          <p className="text-green-600 font-semibold mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
}
