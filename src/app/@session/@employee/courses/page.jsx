import Link from "next/link";

export default function Courses(req) {
  const courses = [
    { name: "Full-Stack JavaScript Developer MERN", students: 1809 },
    { name: "Full-Stack JavaScript Developer MERN", students: 1809 },
    { name: "Full-Stack JavaScript Developer MERN", students: 1809 },
    { name: "Full-Stack JavaScript Developer MERN", students: 1809 },
  ];

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">My Courses</h1>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100"
          href={`/courses?contents=1`}
        >
          Find New Course
        </Link>
      </div>

      {req.searchParams.contents ? (
        <div className="">
          {courses.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col rounded-xl bg-slate-100 mt-4 p-4"
              >
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <span className="ml-auto">{item.students} Students</span>

                  <Link
                    className="px-4 py-2 rounded-full bg-slate-200"
                    href={`/courses/a8s6da8d567a5sd6/watch`}
                  >
                    Watch Course
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <span className="">Nothing here</span>
      )}
    </>
  );
}
