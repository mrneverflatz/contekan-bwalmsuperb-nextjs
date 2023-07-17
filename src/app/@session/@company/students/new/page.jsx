"use client";
import { useRouter } from "next/navigation";
export default async function StudentNew() {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    router.push(`/students?contents=1`);
    router.refresh();
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">My Students</h1>
      </div>

      <form onSubmit={onSubmit}>
        {/* <form action={onSubmit}> */}
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Complete Name</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="photo">Upload a photo</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="file"
              name="photo"
              id="photo"
            />
          </div>

          <div className="flex flex-col items-start">
            <button
              type="submit"
              className="rounded-full px-6 text-center py-4 bg-gray-100"
            >
              Save Student
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
