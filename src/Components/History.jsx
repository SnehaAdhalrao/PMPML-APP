import React from "react";

const History = () => {
  // Hardcoded ticket data
  const tickets = [
    {
      id: 1,
      date: "27 Aug, 2024 | 12:00 PM",
      startingStop: "Starting Stop",
      endingStop: "Ending Stop",
      type: "FULL",
      price: "50",
      count: 1,
      paymentMethod: "Credit Card",
    },
    {
      id: 2,
      date: "30 Aug, 2024 | 03:00 PM",
      startingStop: "Stop A",
      endingStop: "Stop B",
      type: "HALF",
      price: "25",
      count: 2,
      paymentMethod: "Debit Card",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 bg-gray-100 min-h-screen">
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-zinc-200 shadow-md  rounded-lg p-5 w-72 flex flex-col"
          >
            <p className="font-bold text-lg mb-3">{ticket.date}</p>
            <div className="mb-3">
              <label className="font-semibold">Starting Stop:</label>
              <p>{ticket.startingStop}</p>
            </div>
            <div className="mb-3">
              <label className="font-semibold">Ending Stop:</label>
              <p>{ticket.endingStop}</p>
            </div>
            <div className="mb-3">
              <label className="font-semibold">Type:</label>
              <p>{ticket.type}</p>
            </div>
            <div className="mb-3">
              <label className="font-semibold">Price:</label>
              <p>₹ {ticket.price}</p>
            </div>
            <div className="mb-3">
              <label className="font-semibold">Ticket Count:</label>
              <p>{ticket.count}</p>
            </div>
            <div>
              <label className="font-semibold">Payment Method:</label>
              <p>{ticket.paymentMethod}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full">No tickets booked yet.</p>
      )}
    </div>
  );
};

export default History;
