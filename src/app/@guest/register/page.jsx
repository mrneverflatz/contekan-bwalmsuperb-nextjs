"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

const types = {
  employee: {
    label: "Employee",
  },
  company: {
    label: "Company",
  },
};

export default function Register(req) {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role: req.searchParams.type }),
    });
    const { token } = await res.json();

    if (token) {
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push("/courses/new?ref=register");
      router.refresh();
    } else {
      // Make your shiny error handling with a great user experience
      alert("Login failed");
    }
  };

  if (!["company", "employee"].includes(req.searchParams.type)) return null;

  return (
    <main className="mt-12">
      <h1 className="text-4xl">{types[req.searchParams.type].label} Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-8 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="username">Admin Name</label>
            <input
              className="px-2 py-1 bg-white appearance-none border border-gray-200 focus:border-gray-400"
              type="text"
              name="username"
              id="username"
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
    </main>
  );
}
