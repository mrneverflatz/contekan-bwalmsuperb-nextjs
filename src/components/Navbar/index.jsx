import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";

import Logout from "./Logout";

export async function Navbar() {
  const auth = await useAuth.fromServer();

  return (
    <header className="flex container mx-auto mt-6">
      <span className="text-2xl font-light">LMSuperb</span>
      <ul className="ml-auto flex gap-x-8">
        {auth ? (
          <>
            <li>
              <Link href={`/courses?contents=1`}>My Courses</Link>
            </li>

            {auth.role === "company" && (
              <>
                <li>
                  <Link href={`/students`}>My Students</Link>
                </li>
                <li>
                  <Link href={`/settings`}>Settings</Link>
                </li>
              </>
            )}

            <li className="relative group">
              <Logout />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={`/features`}>Features</Link>
            </li>
            <li>
              <Link href={`/pricing`}>Pricing</Link>
            </li>
            <li>
              <Link href={`/benefits`}>Benefits</Link>
            </li>
            <li>
              <Link href={`/showcases`}>Showcases</Link>
            </li>
            <li className="relative group">
              <button className="">Sign In ▼</button>
              <span className="transition-all mt-4 invisible group-hover:visible duration-200 bg-slate-50 border opacity-0 group-hover:opacity-100 flex flex-col absolute right-0">
                <Link
                  className="hover:bg-slate-100 px-6 py-4"
                  href={`/login?type=company`}
                >
                  Company
                </Link>
                <hr />
                <Link
                  className="hover:bg-slate-100 px-6 py-4"
                  href={`/login?type=employee`}
                >
                  Employee
                </Link>
              </span>
            </li>
            <li className="relative group">
              <button className="">Sign Up ▼</button>
              <span className="transition-all mt-4 invisible group-hover:visible duration-200 bg-slate-50 border opacity-0 group-hover:opacity-100 flex flex-col absolute right-0">
                <Link
                  className="hover:bg-slate-100 px-6 py-4"
                  href={`/register?type=company`}
                >
                  Company
                </Link>
                <hr />
                <Link
                  className="hover:bg-slate-100 px-6 py-4"
                  href={`/register?type=employee`}
                >
                  Employee
                </Link>
              </span>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Navbar;
