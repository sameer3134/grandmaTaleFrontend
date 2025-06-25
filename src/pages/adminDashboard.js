import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const orderSnapshot = await getDocs(collection(db, "orders"));
      const ordersData = orderSnapshot.docs.map((doc) => doc.data());
      setOrders(ordersData);

      const drawsSnapshot = await getDocs(collection(db, "draws"));
      const drawData = drawsSnapshot.docs.map((doc) => doc.data());
      setWinners(drawData);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700"> Admin Raffle Dashboard</h1>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Ticket ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{order.email}</td>
                  <td className="px-4 py-3">{order.product}</td>
                  <td className="px-4 py-3 font-mono">{order.ticketId}</td>
                  <td className="px-4 py-3">AED {order.amount / 100}</td>
                  <td className="px-4 py-3">{new Date(order.createdAt?.seconds * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Winners Table */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Winners</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-yellow-100">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Ticket</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {winners.map((draw, i) => (
                <tr key={i} className="hover:bg-yellow-50 transition">
                  <td className="px-4 py-3">{draw.email}</td>
                  <td className="px-4 py-3 font-mono font-bold">{draw.ticketId}</td>
                  <td className="px-4 py-3">{new Date(draw.timestamp?.seconds * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
