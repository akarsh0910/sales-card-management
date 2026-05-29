import { useEffect, useState } from "react";

import { getAllCards } from "../services/cardService";

import { logoutUser } from "../services/authService";

import { useNavigate } from "react-router-dom";

import * as XLSX from "xlsx";

function AdminDashboard() {

  const navigate = useNavigate();

  const [cards, setCards] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCards();

  }, []);

  const fetchCards = async () => {

    const data = await getAllCards();

    setCards(data);

  };

  const filteredCards = cards.filter((card) => {

    return (
      card.companyName?.toLowerCase().includes(search.toLowerCase()) ||
      card.personName?.toLowerCase().includes(search.toLowerCase()) ||
      card.address?.toLowerCase().includes(search.toLowerCase()) ||
      card.salespersonName?.toLowerCase().includes(search.toLowerCase())
    );

  });

  const exportExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(filteredCards);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Cards");

    XLSX.writeFile(workbook, "BusinessCards.xlsx");

  };

  const handleLogout = async () => {

    await logoutUser();

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="bg-slate-900 text-white px-8 py-5 shadow-lg flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-300 mt-1">
            Manage Submitted Business Cards
          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={exportExcel}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold"
          >
            Download Excel
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="p-6">

        <div className="bg-white p-5 rounded-2xl shadow-md mb-6">

          <input
            type="text"
            placeholder="Search by company, address, salesperson..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl h-12 px-4 outline-none focus:border-blue-500"
          />

        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-auto">

          <table className="w-full">

            <thead className="bg-slate-200">

              <tr>

                <th className="text-left p-4">Company</th>

                <th className="text-left p-4">Person</th>

                <th className="text-left p-4">Phone</th>

                <th className="text-left p-4">Address</th>

                <th className="text-left p-4">Place</th>

                <th className="text-left p-4">Salesperson</th>

              </tr>

            </thead>

            <tbody>

              {filteredCards.map((card) => (

                <tr
                  key={card.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4">
                    {card.companyName}
                  </td>

                  <td className="p-4">
                    {card.personName}
                  </td>

                  <td className="p-4">
                    {card.contactNumber}
                  </td>

                  <td className="p-4">
                    {card.address}
                  </td>

                  <td className="p-4">
                    {card.placeReceived}
                  </td>

                  <td className="p-4">
                    {card.salespersonName}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;