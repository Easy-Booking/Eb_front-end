import { useState } from "react";
import { CreditCard, Wallet, Banknote, ShieldCheck, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsPaid(true);
  };

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Checkout</h2>

        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Order Summary</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Service: Premium Booking Plan</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Total: Rs 100</p>
          {discount > 0 && <p className="text-green-500">Discount Applied: -${discount}</p>}
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Select Payment Method</h3>
        <div className="flex gap-4 mb-4">
          <button onClick={() => setPaymentMethod("creditCard")} className={`p-3 rounded-lg border ${paymentMethod === "creditCard" ? "border-blue-500" : "border-gray-300"}`}> <CreditCard /> <Link to="/Pay" >Credit/Debit Card</Link> </button>
          <button onClick={() => setPaymentMethod("wallet")} className={`p-3 rounded-lg border ${paymentMethod === "wallet" ? "border-blue-500" : "border-gray-300"}`}> <Wallet /> Digital Wallet</button>
          <button onClick={() => setPaymentMethod("bank")} className={`p-3 rounded-lg border ${paymentMethod === "bank" ? "border-blue-500" : "border-gray-300"}`}> <Banknote /> Bank Transfer</button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white">Promo Code</label>
          <div className="flex gap-2">
            <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="border p-2 w-full rounded-md" />
            <button onClick={applyPromoCode} className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</button>
          </div>
        </div>

        <button onClick={handlePayment} className="bg-green-500 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2">
          <ShieldCheck /> Pay Now
        </button>

        {isPaid && (
          <div className="mt-4 bg-green-100 dark:bg-green-700 p-4 rounded-lg text-center">
            <CheckCircle className="text-green-500 mx-auto" size={32} />
            <p className="text-green-700 dark:text-white font-semibold">Payment Successful!</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Payment
