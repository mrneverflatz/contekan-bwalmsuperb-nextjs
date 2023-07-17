"use client";
import { redirect, useParams } from "next/navigation";

export default function Session() {
  const params = useParams();

  redirect(`/courses/${params["id-courses"]}`);
}
