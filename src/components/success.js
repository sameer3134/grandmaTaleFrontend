// src/pages/Success.jsx
import React, { useEffect, useState } from "react";
import { db, collection, addDoc } from "../firebase"; // Adjust the path as needed
import { getDocs } from "firebase/firestore";

const Success = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [showPopup, setShowPopup] = useState(false);
  const [ticketId, setTicketId] = useState("")

  useEffect(() => {
    // Show popup 0.5s after page loads
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  }, []);
  useEffect(() => {
    const handleSuccess = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get("session_id");
      if (!sessionId) return;


      try {
        // 1. Fetch session details from backend
        const sessionRes = await fetch(`${BASE_URL}/api/session-details?session_id=${sessionId}`);
        const sessionData = await sessionRes.json();

        const ticket = "GT-" + Math.floor(100000 + Math.random() * 900000);
        setTicketId(ticket);
        const orderData = {
          email: sessionData.customer_email,
          product: sessionData.metadata?.title || "Folktale Bundle",
          amount: sessionData.amount_total,
          ticketId: ticket,
          createdAt: new Date(),
        };

        // ✅ Save to Firebase
        await addDoc(collection(db, "orders"), orderData);
        const snapshot = await getDocs(collection(db, "orders"));
        if (snapshot.size % 13 === 0) {
          const docs = snapshot.docs;
          const winnerDoc = docs[Math.floor(Math.random() * docs.length)];
          const winnerData = winnerDoc.data();
          // Save to Firestore
        await addDoc(collection(db, "draws"), {
  ticketId: winnerData.ticketId,
  email: winnerData.email,
  timestamp: new Date(),
});

          await fetch(`${BASE_URL}/api/log-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: sessionData.customer_email,
            product: sessionData.metadata?.title || "Folktale Bundle",
            amount: sessionData.amount_total,
            ticketId: ticket,
          }),
        });
      }

        

      } catch (err) {
        console.error("Error handling success:", err);
      }
    };

    handleSuccess();
  }, []);

  return (
    <div className="h-screen bg-[#FAF9F7] flex items-center justify-center">
      {showPopup && (
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm text-center animate-fade-in">
          <h2 className="text-2xl font-bold font-serif text-plum">🎉 Success!</h2>
          <p className="mt-4 text-base text-gray-700">
            Your purchase was successful.
          </p>
          <p className="mt-2 text-sm text-gold font-semibold">
            You’ve earned a raffle ticket! 🏆
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
