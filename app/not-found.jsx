import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl text-#9680fe">There was a problem</h2>
      <p>We could not find the page you where looking for</p>
      <Link href="/">
        Go to <span className="text-rose-400">Dashboard</span>{" "}
      </Link>
      <p className="text-5xl mt-3 text-#9680fe">404</p>
    </main>
  );
}
