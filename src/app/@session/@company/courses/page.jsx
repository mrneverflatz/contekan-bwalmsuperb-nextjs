import Link from "next/link";

export default function Courses() {
  // async function onSubmit(e) {
  //   "use server";

  //   console.log(e);
  // }
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">My Courses</h1>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100"
          href={`/courses/new`}
        >
          New
        </Link>
      </div>
      Nothing here
    </>
  );
}
