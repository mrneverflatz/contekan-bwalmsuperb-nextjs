// import { SignJWT } from "jose";
import { NextResponse } from "next/server";
// import { getJwtSecretKey } from "@/libs/auth";

export async function POST() {
  const response = NextResponse.json(
    { success: true },
    { status: 200, headers: { "content-type": "application/json" } }
  );

  response.cookies.set({
    name: "token",
    value: "",
    path: "/",
  });

  return response;
}
