import { useState } from "react";

import { addCard } from "../services/cardService";

import { logoutUser } from "../services/authService";

import { useNavigate } from "react-router-dom";

function SalesDashboard() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    personName: "",
    contactNumber: "",
    placeReceived: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newCard = {
      ...formData,
      salespersonName: "Sales User",
      createdAt: new Date(),
    };

    const success = await addCard(newCard);

    if (success) {

      alert("Card Added Successfully");

      setFormData({
        companyName: "",
        address: "",
        personName: "",
        contactNumber: "",
        placeReceived: "",
      });

    } else {

      alert("Something went wrong");

    }
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
            Sales Dashboard
          </h1>

          <p className="text-slate-300 mt-1">
            Add Business Card Details
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold"
        >
          Logout
        </button>

      </div>

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Add New Card
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <div>
              <label className="text-sm font-medium text-slate-600">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full border rounded-xl h-12 px-4 mt-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Person Name
              </label>

              <input
                type="text"
                name="personName"
                value={formData.personName}
                onChange={handleChange}
                placeholder="Enter person name"
                className="w-full border rounded-xl h-12 px-4 mt-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Contact Number
              </label>

              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full border rounded-xl h-12 px-4 mt-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Place Received
              </label>

              <input
                type="text"
                name="placeReceived"
                value={formData.placeReceived}
                onChange={handleChange}
                placeholder="Where card was received"
                className="w-full border rounded-xl h-12 px-4 mt-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-600">
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                rows="4"
                className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="md:col-span-2">

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white h-12 rounded-xl font-semibold"
              >
                Submit Card
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default SalesDashboard;