import React, { useState, useEffect } from "react";
import type { BookingFormData } from "../../types/booking.types";
import { SectionWrapper } from "../common/SectionWrapper";
import senderSection from "./SenderSection";
import receiverSection from "./ReceiverSection";
import packageSection from "./PackageSection";

const initialFormData: BookingFormData = {
  senderName: "",
  senderMobile: "",
  senderEmail: "",
  receiverName: "",
  receiverAddress: "",
  weight: "",
  ratePerKg: "",
  totalCost: 0,
};

export const BookingForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-mono font-black flex items-center gap-2">
            <i className="bi bi-box-seam-fill"></i> New Booking Entry
          </h1>

          <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
            Clear Form
          </button>
        </div>
        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender */}
          <SectionWrapper
            title={"Sender Details"}
            icon={"bi bi-person"}
            children={senderSection()}
          />

          {/* Receiver */}
          <SectionWrapper
            title={"Receiver Details"}
            icon={"bi bi-person"}
            children={receiverSection()}
          />
        </div>
        {/* Package Details */}
        <div className="mt-6">
          <SectionWrapper
            title={"Package Details"}
            icon={" bi-box-seam-fill"}
            children={packageSection()}
          />
        </div> 
        
        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            Cancel
          </button>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            ✓ Submit Booking
          </button>
        </div>
      </div>
    </div>
  );
};
