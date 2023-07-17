import Link from "next/link";
export default function CoursePublish() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-4 h-96">
      <h1 className="text-4xl">Success Published</h1>
      <p className="text-xl max-w-xs">
        Your course has been published and students can start learning from now
        on, yeay!
      </p>
      <Link
        className="px-6 text-center py-4 rounded-full bg-gray-100"
        href={`/courses/a8s6da8d567a5sd6/watch`}
      >
        Publish Now
      </Link>
    </div>
  );
}
