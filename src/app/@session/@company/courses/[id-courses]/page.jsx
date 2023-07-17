"use client";

import { useState } from "react";
import Link from "next/link";

export default function CourseSyllabi(req) {
  const [newSilabus, newSilabusSet] = useState(false);

  const [silabus, silabusSet] = useState(
    req.searchParams.contents
      ? [
          {
            name: "Warming Up Installation",
            videos: [
              { name: "Install Adobe XD" },
              { name: "Install Adobe XD" },
              { name: "Install Adobe XD" },
            ],
          },
          {
            name: "Basic Scratch",
            videos: [
              { name: "Install Adobe XD" },
              { name: "Install Adobe XD" },
              { name: "Install Adobe XD" },
            ],
          },
        ]
      : []
  );

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    silabusSet((prev) => [
      ...prev,
      {
        name,
        videos: [],
      },
    ]);
    event.target.reset();
  }
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">Course: Full-Stack JavaScript MERN 2024</h1>
        {req.searchParams.contents && (
          <Link
            className="px-6 text-center py-4 rounded-full bg-gray-100"
            href={`/courses/a8s6da8d567a5sd6/publish`}
          >
            Publish Now
          </Link>
        )}
      </div>

      <h2 className="text-2xl mt-6">Syllabus</h2>
      {silabus.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col rounded-xl bg-slate-100 mt-4 p-4"
          >
            <div className="flex items-center justify-between mt-4 ">
              <span className="">{item.name}</span>
              <Link
                className="px-4 py-2 rounded-full bg-slate-200"
                href={`/courses/a8s6da8d567a5sd6/syllabi/${i}`}
              >
                Manage
              </Link>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              {item.videos.map((video) => {
                return (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-200">
                    <span className="">{item.name}</span>
                    <button className="px-4 py-2 rounded-full bg-slate-300">
                      ↕
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {!newSilabus ? (
        <div className="flex items-center justify-between rounded-full bg-slate-100 mt-4 p-4">
          <span className="">Add new section</span>
          <button
            className="px-4 py-2 rounded-full bg-slate-200"
            onClick={() => newSilabusSet(true)}
          >
            +
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="flex flex-col rounded-full bg-slate-100 mt-4 p-4">
            <div className="flex justify-between gap-y-4 px-4">
              <div className="flex flex-col">
                <input
                  className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write your section name"
                />
              </div>

              <div className="flex flex-col items-start">
                <button
                  type="submit"
                  className="rounded-full px-4 text-center py-4"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
