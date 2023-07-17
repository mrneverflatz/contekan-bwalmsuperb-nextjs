"use client";
import { useRouter } from "next/navigation";
export default async function CourseNew() {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    router.push(`/courses/a8s6da8d567a5sd6`);
    router.refresh();
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">Create Your First Course Ever</h1>
      </div>

      <form onSubmit={onSubmit}>
        {/* <form action={onSubmit}> */}
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Course Name</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="category"
              id="category"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="attachment">Add attachment (thumbnail)</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="file"
              name="attachment"
              id="attachment"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tagline">Tagline</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="name"
              name="tagline"
              id="tagline"
            />
          </div>

          <div className="flex flex-col items-start">
            <button
              type="submit"
              className="rounded-full px-6 text-center py-4 bg-gray-100"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
