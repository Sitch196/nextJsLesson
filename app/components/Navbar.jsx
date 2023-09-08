import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./attachment_105666475.jpeg";
function Navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="some company logo"
        width={70}
        quality={100}
        placeholder="blur"
        style={{ borderRadius: "50%" }}
      />
      <h1>HelpDesk</h1>
      <Link href="/">Dashbord</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
