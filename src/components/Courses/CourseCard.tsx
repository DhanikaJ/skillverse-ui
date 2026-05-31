import { Status } from "../../types";
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
  status: Status;
  users: any[]; 
}

export default function CourseCard({ id, title, description, pricelevel, difficulty, price, thumbnail, created_at, status, users }: CourseProps) {
  return (
    <Link to={`/courses/${id}`}>
      <div className="course-card border rounded-xl p-4 shadow-md w-72">
        <div className="course-card-content">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="course-title text-xl font-bold mt-3">{title}</h2>

          <p className="text-gray-600">{description}</p>

          <p>Instructor: {users[0]?.fname} {users[0]?.lname}</p>

          <p className="text-gray-600">{users.length} students enrolled</p>

          <p className="text-sm text-gray-500 mt-2">
            Difficulty: {difficulty} | Price Level: {pricelevel}
          </p>

          <p className="text-gray-600">{status.type}</p>

          <p className="text-green-600 font-semibold mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
}
