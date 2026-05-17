import PropTypes from "prop-types";
import "./CourseCard.css";

export default function CourseCard({title, instructor, price, imageUrl}) {
  return (
    <div className="course-card border rounded-x1 p-4 shadow-md w-72">
      <div className="course-card-content">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="course-title text-x1 font-bold mt-3">{title}</h2>

        <p className="text-gray-600">Instructor: {instructor}</p>

        <p className="text-green-600 font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
