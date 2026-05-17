import { useParams } from "react-router-dom";

function CourseDetailPage() {

    const { id } = useParams();

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold">
                Course Detail Page
            </h1>

            <p className="mt-4 text-xl">
                Course ID: {id}
            </p>

        </div>
    );
}

export default CourseDetailPage;