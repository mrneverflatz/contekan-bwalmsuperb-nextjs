import { redirect } from "next/navigation";

export default function CompanyRedirect() {
  redirect("/courses?contents=1");
}
