"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

function WatchPage() {
  const searchParams = useSearchParams();

  if (searchParams.has("next"))
    return (
      <div className="flex flex-col items-center justify-center text-center gap-y-4 h-96">
        <h1 className="text-4xl">Course Finished</h1>
        <p className="text-xl max-w-xs">
          Congratulations! now you are better than before and ready to get a
          great work for today
        </p>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100"
          href={`/courses?contents=1`}
        >
          My Dashboard
        </Link>
      </div>
    );

  return (
    <div className="fixed inset-0 bg-white flex">
      <aside className="w-56 flex-none flex flex-col gap-y-6 bg-slate-100">
        <div className="text-center mt-4">
          <Link href={`/courses?contents=1`}>Back to Dashboard</Link>
        </div>
        <div className="px-4">
          <div className="w-full h-36 rounded bg-slate-200 "></div>
        </div>
        <ul className="pl-4 flex flex-col gap-y-4">
          <li className="">
            <h6 className="">Warming Up</h6>
            <ul className="pl-5 list-disc flex flex-col gap-y-2">
              <li>Intro</li>
              <li>Install Adobe XD</li>
              <li>Download</li>
              <li>Plugins Favs</li>
            </ul>
          </li>
          <li className="">
            <h6 className="">Projects</h6>
            <ul className="pl-5 list-disc flex flex-col gap-y-2">
              <li>Integration</li>
              <li>QA Testing</li>
              <li>Deployment</li>
              <li>Closing</li>
            </ul>
          </li>
        </ul>
      </aside>
      <div className="w-full flex flex-col">
        <div className="flex items-center justify-center h-[600px] bg-slate-200">
          ▶
        </div>
        <div className="flex justify-between px-8 mt-8">
          <div className="flex flex-col">
            <h3 className="text-2xl">Install Adobe XD</h3>
            <span className="text-lg">Section Warming Up</span>
          </div>
          <Link
            className="px-6 text-center py-4 rounded-full bg-gray-100"
            href={`/courses/a8s6da8d567a5sd6/watch?next=1`}
          >
            Next Video
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
