import { useState } from "react";
import { Tag, Gift, Bell,Copy } from "lucide-react";
import { Link } from 'react-router-dom';

const promotions = [
  { id: 1, title: "50% Off on First Booking!", code: "WELCOME50", expires: "March 31, 2025" },
  { id: 2, title: "Buy 1 Get 1 Free - Salon Services", code: "SALONBOGO", expires: "April 10, 2025" },
  { id: 3, title: "20% Off on Health Checkups", code: "HEALTH20", expires: "April 5, 2025" },
];

 function Promotion() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
            <Tag className="mr-2" /> Promotions & Discounts
          </h2>
          <Bell className="text-gray-500 dark:text-gray-300" size={24} />
        </div>

        <div className="mt-4 bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <Gift size={48} className="mb-2" />
          <h3 className="text-xl font-bold">Limited Time Offer!</h3>
          <p>Get 50% off on your first booking! Use code: <strong>WELCOME50</strong></p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg mt-3 font-semibold shadow-md">
            <Link to="/dashboard">Book Now </Link>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {promotions.map(({ id, title, code, expires }) => (
            <div key={id} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expires on: {expires}</p>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-md font-mono mr-2">{code}</span>
                <button onClick={() => handleCopy(code)} className="text-blue-500 hover:text-blue-700">
                  <Copy size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {copiedCode && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
            Promo code "{copiedCode}" copied!
          </div>
        )}
      </div>
    </div>
  );
}

export default Promotion