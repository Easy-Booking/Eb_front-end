import { CreditCard, Apple, WalletCards } from 'lucide-react';
import { Link } from 'react-router-dom';

function Pay() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center items-start">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-lg p-6 rounded-xl">

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 mr-[360px]">Add your pay here</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 mr-[235px]">Add a new payment method to your account.</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border text-white bg-gray-700 hover:bg-gray-600">
            <CreditCard size={20} /> Card
          </button>
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border text-white bg-gray-700 hover:bg-gray-600">
            <Apple size={20} /> Apple Pay
          </button>
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border text-white bg-gray-700 hover:bg-gray-600">
            <WalletCards size={20} /> Cash
          </button>
        </div>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mr-[480px]">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="mt-1 w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Card Name */}
          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-white mr-[445px]">Card Name</label>
            <input
              id="cardName"
              name="cardName"
              type="text"
              placeholder="Enter your card name"
              required
              className="mt-1 w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Card Number */}
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-white mr-[430px]">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              placeholder="Enter your Number (16 digits)"
              required
              className="mt-1 w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Expiry Month */}
            <div className="flex-1">
              <label htmlFor="month" className="block text-sm font-medium text-white">Expires</label>
              <select
                id="month"
                className="mt-1 w-full bg-gray-800 border border-gray-600 text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option>Month</option>
                <option>01 - January</option>
                <option>02 - February</option>
                <option>03 - March</option>
                <option>04 - April</option>
                <option>05 - May</option>
                <option>06 - June</option>
                <option>07 - July</option>
                <option>08 - Augest</option>
                <option>09 - September</option>
                <option>10 - October</option>
                <option>11 - November</option>
                <option>12 - December</option>
              </select>
            </div>

            {/* Expiry Year */}
            <div className="flex-1">
              <label htmlFor="year" className="block text-sm font-medium text-white">Year</label>
              <select
                id="year"
                className="mt-1 w-full bg-gray-800 border border-gray-600 text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option>Year</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
              </select>
            </div>

            {/* CVC */}
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-sm font-medium text-white">CVC</label>
              <input
                id="cvc"
                type="text"
                placeholder="CVC"
                className="mt-1 w-full bg-gray-800 border border-gray-600 text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-medium rounded-lg px-6 py-3 mt-4 hover:bg-gray-200 transition"
          ><Link to='/Payment'> Continue </Link>
            
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pay;
