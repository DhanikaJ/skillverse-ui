import CourseList from "../components/Courses/CourseList";

export default function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold tracking-wide text-indigo-600">
          Curated picks
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Explore Our Courses
        </h1>
        <p className="mt-2 text-slate-600">
          Learn, grow, and level up—pick your next skill.
        </p>
      </div>

      <div className="rounded-3xl bg-gradient-to-b from-white to-indigo-50 p-4 shadow-sm ring-1 ring-black/5">
        <CourseList />
      </div>
    </div>
  );
}

