import CourseCard from "./CourseCard";

const CourseList = () => {

const courses = [
    {
        id: 1,
        title: "React for Beginners",
        instructor: "John Doe",
        price: 49,
        imageUrl: "https://picsum.photos/300/200?1"
    },
    {
        id: 2,
        title: "Spring Boot Masterclass",
        instructor: "Jane Smith",
        price: 79,
        imageUrl: "https://picsum.photos/300/200?2"
    },
    {
        id: 3,
        title: "Docker Essentials",
        instructor: "Alex Johnson",
        price: 59,
        imageUrl: "https://picsum.photos/300/200?3"
    }
    
];

  return (
        <div className="flex gap-6 flex-wrap">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                    imageUrl={course.imageUrl}
                />
            ))}
        </div>
    );
}

export default CourseList

