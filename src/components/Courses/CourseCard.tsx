import "./CourseCard.css";
import { Link } from "react-router-dom";

interface CourseProps {
  id: number;
  title: string;
  instructor: string;
  price: number;
  imageUrl: string;
}

export default function CourseCard({ id, title, instructor, price, imageUrl }:CourseProps) {
  return (
    <Link to={`/courses/${id}`}>
      <div className="course-card border rounded-xl p-4 shadow-md w-72">
        <div className="course-card-content">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="course-title text-xl font-bold mt-3">{title}</h2>

          <p className="text-gray-600">Instructor: {instructor}</p>

          <p className="text-green-600 font-semibold mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
}
