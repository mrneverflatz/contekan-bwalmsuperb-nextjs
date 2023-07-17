"use client";

import { login } from "@/redux/slices/users";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Login(req) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role: req.searchParams.type }),
    });
    const data = await res.json();

    if (!!data) {
      dispatch(
        login({
          token: data.token,
          profile: {
            email,
            role: req.searchParams.type,
          },
        })
      );

      const nextUrl = searchParams.get("next");
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push(nextUrl ?? "/");
      router.refresh();
    } else {
      // Make your shiny error handling with a great user experience
      alert("Login failed");
    }
  };

  if (!["company", "employee"].includes(req.searchParams.type)) return null;

  if (req.searchParams.type === "employee") {
    return (
      <main className="mt-12">
        <h1 className="text-4xl">Employee Sign In</h1>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col mt-8 gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">Email Address</label>
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

            <div className="flex flex-col items-start">
              <button
                type="submit"
                className="rounded-full px-6 text-center py-4 bg-gray-100"
              >
                Sign In
              </button>

              <p>
                Contact your Admin if you have a problem within accessing the
                content
              </p>

              {/* <Link
                className="px-6 text-center py-4 mt-8 rounded-full bg-gray-100"
                href={`/sign-in?type=${req.searchParams.type}`}
              >
                Sign In
              </Link> */}
            </div>
          </div>
        </form>
      </main>
    );
  }

  return (
    <>
      <h1 className="text-4xl">Company Sign In</h1>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Email Address</label>
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

          <div className="flex flex-col items-start">
            <Link className="" href={`/forgot-password`}>
              Forgot Password
            </Link>

            <button
              type="submit"
              className="rounded-full px-6 text-center py-4 bg-gray-100"
            >
              Sign In
            </button>

            <Link
              className="px-6 text-center py-4 mt-8 rounded-full bg-gray-100"
              href={`/sign-up?type=${req.searchParams.type}`}
            >
              Create New Account
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
