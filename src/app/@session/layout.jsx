import { useAuth } from "@/hooks/useAuth";
import React from "react";

async function layout(props) {
  const auth = await useAuth.fromServer();

  if (auth.role === "company") return <div>{props.company}</div>;
  if (auth.role === "employee") return <div>{props.employee}</div>;
  return null;
}

export default layout;
