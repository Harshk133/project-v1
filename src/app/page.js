"use client";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    destination: "",
    date: "",
    awb: "",
    sender: "",
    gst: "",
    receiver: "",
    description: "",
    value: "",
    weight: "",
    freight: "",
    total: "",
    time: new Date().toLocaleTimeString(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Removed heading from print area */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 print:hidden">
        <h2 className="text-lg font-semibold mb-3">Fill Bill Details</h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            "destination",
            "date",
            "awb",
            "sender",
            "gst",
            "receiver",
            "description",
            "value",
            "weight",
            "freight",
            "total",
          ].map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key.toUpperCase()}
              type={key === "date" ? "date" : "text"}
              className="border border-gray-300 p-2 rounded"
            />
          ))}
        </div>

        <button
          onClick={handlePrint}
          className="mt-6 bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700"
        >
          Print / Save PDF
        </button>
      </div>

      {/* --- BILL PREVIEW SECTION --- */}
      <div
        id="bill"
        className="bg-white border border-gray-400 rounded-lg max-w-3xl mx-auto p-4 text-xs font-sans"
      >
        {/* Header */}
        <div className="text-center border-b-2 border-yellow-500 pb-1 mb-2">
          <h2 className="text-lg font-bold text-orange-700">
            Tirupati Courier Services Pvt. Ltd.
          </h2>
          <p className="text-[10px] text-gray-600">
            Franchisee: V.K. Enterprises, 13, Vanjari Complex, Opp. Vanjari
            Dharmashala, Tanpure Math Road, Pandharpur
          </p>
        </div>

        {/* Origin / Destination / Date / AWB */}
        <div className="grid grid-cols-4 border border-gray-400 text-[11px]">
          <div className="p-1 border-r border-gray-400">
            <strong>ORIGIN</strong>
            <p className="font-semibold">PANDHARPUR</p>
          </div>
          <div className="p-1 border-r border-gray-400">
            <strong>DESTINATION</strong>
            <p>{form.destination}</p>
          </div>
          <div className="p-1 border-r border-gray-400">
            <strong>DATE</strong>
            <p>{form.date}</p>
          </div>
          <div className="p-1">
            <strong>AWB NUMBER</strong>
            <p>{form.awb}</p>
          </div>
        </div>

        {/* Sender / Receiver */}
        <div className="grid grid-cols-2 border-x border-gray-400 border-b text-[11px]">
          <div className="p-1 border-r border-gray-400">
            <strong>SENDER</strong>
            <p>{form.sender}</p>
            <p className="text-[10px] mt-1">
              GST No.: <span>{form.gst}</span>
            </p>
          </div>
          <div className="p-1">
            <strong>RECEIVER</strong>
            <p>{form.receiver}</p>
          </div>
        </div>

        {/* Description / Values */}
        <div className="grid grid-cols-4 border border-gray-400 text-[11px]">
          <div className="p-1 border-r border-gray-400">
            <strong>DESCRIPTION OF CONTENTS</strong>
            <p>{form.description}</p>
          </div>
          <div className="p-1 border-r border-gray-400">
            <strong>DECLARED VALUE</strong>
            <p>{form.value}</p>
          </div>
          <div className="p-1 border-r border-gray-400">
            <strong>WEIGHT</strong>
            <p>{form.weight}</p>
          </div>
          <div className="p-1">
            <strong>FREIGHT CHARGE</strong>
            <p>{form.freight}</p>
          </div>
        </div>

        {/* Total */}
        <div className="border-x border-b border-gray-400 text-[11px] p-1">
          <strong>TOTAL AMOUNT:</strong> ₹{form.total}
        </div>

        {/* Footer */}
        <div className="border border-gray-400 mt-2 text-[10px] p-1">
          <p>
            I hereby agree with the terms and conditions set forth on the
            reverse side of this non-negotiable consignment note...
          </p>

          <div className="grid grid-cols-2 mt-2">
            <div>
              <strong>SENDER SIGNATURE:</strong> ___________________
            </div>
            <div className="text-right">
              <strong>RECEIVER SIGNATURE & STAMP:</strong> ____________
            </div>
          </div>

          <div className="text-right mt-2">
            <strong>TIME:</strong> {form.time}
          </div>

          <p className="text-center mt-1 text-[9px] text-gray-600">
            www.shreetirupaticourier.net
          </p>
        </div>
      </div>
    </div>
  );
}
