import Link from "next/link";

export default async function Students(req) {
  const students = [
    { name: "Sandy", email: "sandy@bwa.com" },
    { name: "Sandy", email: "sandy@bwa.com" },
    { name: "Sandy", email: "sandy@bwa.com" },
    { name: "Sandy", email: "sandy@bwa.com" },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl">My Students</h1>
        <Link
          className="px-6 text-center py-4 rounded-full bg-gray-100"
          href={`/students/new`}
        >
          New
        </Link>
      </div>

      {req.searchParams.contents ? (
        <div className="">
          {students.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col rounded-xl bg-slate-100 mt-4 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <span className="">{item.email}</span>
                  </div>
                  <span className="">Active</span>
                  <Link
                    className="px-4 py-2 rounded-full bg-slate-200"
                    href={`/students/a8s6da8d567a5sd6`}
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">Belum tersedia student untuk saat ini.</div>
      )}
    </>
  );
}
