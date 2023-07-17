"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    const { success } = await res.json();

    if (success) {
      router.push("/");
      router.refresh();
    } else {
      alert("Logout failed");
    }
  };

  return <button onClick={logout}>Logout</button>;
}

export default Logout;
