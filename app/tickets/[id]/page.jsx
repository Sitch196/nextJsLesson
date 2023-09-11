"use client";

import React, { useEffect, useState } from "react";
import NotFound from "../../not-found";
import Loading from "@/app/loading";
export default function TicketDetails({ params }) {
  const [pageFound, setPageFound] = useState(true);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/tickets/${params.id}`);
        if (!res.ok) {
          setPageFound(false);
          return;
        }

        const tickets = await res.json();
        setTicket(tickets);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        setPageFound(false);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      {pageFound ? (
        <main>
          <nav>
            <h2>Ticket Details</h2>
          </nav>
          {ticket ? (
            <div className="card">
              <h3>{ticket.title}</h3>
              <small>Created By {ticket.user_email}</small>
              <p>{ticket.body}</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
}
