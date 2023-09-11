import React, { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
          <div className="mt-4">
            <Link
              href="/tickets/create"
              className="bg-green-500 hover:bg-green-600 hover:text-white text-white font-semibold py-2 px-4 shadow-md "
            >
              Create a Ticket
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
};

export default page;
