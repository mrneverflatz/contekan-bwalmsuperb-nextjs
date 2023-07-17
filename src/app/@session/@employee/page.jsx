import Link from "next/link";

export default async function Member(req) {
  // async function onSubmit(e) {
  //   "use server";

  //   console.log(e);
  // }
  return (
    <>
      <h1 className="text-4xl">Member Employee</h1>

      <form>
        {/* <form action={onSubmit}> */}
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Admin Name</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Company Category</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="category"
              id="category"
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

          <div className="flex gap-x-2">
            <input
              className=""
              type="checkbox"
              name="agree"
              id="agree"
              value={1}
            />
            <label htmlFor="agree">I Agree</label>
          </div>

          <div className="flex flex-col items-start">
            <button
              type="submit"
              className="rounded-full px-6 text-center py-4 bg-gray-100"
            >
              Continue Sign Up
            </button>

            <Link
              className="px-6 text-center py-4 mt-8 rounded-full bg-gray-100"
              href={`/sign-in?type=${req.searchParams.type}`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
