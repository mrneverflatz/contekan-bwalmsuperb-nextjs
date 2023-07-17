"use client";

import { useState } from "react";
import Link from "next/link";

export default function CourseSyllabus(req) {
  const [video, videoSet] = useState(
    req.searchParams.contents === "1"
      ? [
          { name: "Download Adobe XD" },
          { name: "Install Fonts" },
          { name: "Check wireframe" },
          { name: "Convert UI Kit" },
        ]
      : []
  );

  return (
    <>
      <Link
        className="px-6 text-center py-4 rounded-full bg-gray-100"
        href={`/courses/a8s6da8d567a5sd6?contents=1`}
      >
        Back to Course
      </Link>
      <div className="flex justify-between mt-4">
        <h1 className="text-4xl">Manage Content: Warming Up Installation</h1>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100 ml-auto"
          href={`/courses/new`}
        >
          Edit
        </Link>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100 ml-4"
          href={`/courses/a8s6da8d567a5sd6/syllabi/0/new`}
        >
          Add Video
        </Link>
      </div>

      {video.length === 0
        ? "Belum tersedia video materi"
        : video.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between rounded-full bg-slate-100 mt-4 p-4"
              >
                <span className="mr-auto">{item.name}</span>

                <Link
                  className="px-4 py-2 rounded-full bg-slate-200"
                  href={`/courses/a8s6da8d567a5sd6/syllabi/${i}/`}
                >
                  Edit
                </Link>
                <button className="px-4 py-2 rounded-full bg-slate-200 ml-4">
                  ↕
                </button>
              </div>
            );
          })}
    </>
  );
}
