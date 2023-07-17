"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function CourseNew() {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    router.push(`/courses/a8s6da8d567a5sd6/syllabi/0?contents=1`);
    router.refresh();
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">Add Materi to: Warming Up Installation</h1>
      </div>

      <form onSubmit={onSubmit}>
        {/* <form action={onSubmit}> */}
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Video Name</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="url">Youtube video URL</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="url"
              id="url"
            />
          </div>

          <div className="flex flex-col items-start">
            <button
              type="submit"
              className="rounded-full px-6 text-center py-4 bg-gray-100"
            >
              Add Now
            </button>

            <Link
              className="px-6 text-center py-4 mt-8 rounded-full bg-gray-100"
              href={`/courses/a8s6da8d567a5sd6/syllabi/0`}
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
