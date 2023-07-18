import { redirect } from "next/navigation";

export default function Page() {
  redirect("/courses?contents=1");
}
