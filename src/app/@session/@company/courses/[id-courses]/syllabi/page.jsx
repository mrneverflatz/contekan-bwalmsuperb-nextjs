"use client";
import { redirect, useParams } from "next/navigation";

export default function DefaultSyllabi() {
  const params = useParams();

  redirect(`/courses/${params["id-courses"]}`);
}
