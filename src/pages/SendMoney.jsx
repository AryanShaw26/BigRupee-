import { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { WalletContext } from "../context/WalletContext";

function SendMoney() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const {
    balance,
    setBalance,
    transactions,
    setTransactions,
    notifications,
    setNotifications,
  } = useContext(WalletContext);

  const handleSend = () => {
    if (!name || !amount) {
      alert("Fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Enter a valid amount");
      return;
    }

    if (Number(amount) > balance) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(balance - Number(amount));

    const newTransaction = {
      id: Date.now(),

      name: name,

      amount: `-₹${amount}`,

      type: "Sent Money",
    };

    setTransactions([newTransaction, ...transactions]);
    const newNotification = {
      id: Date.now(),

      message: `₹${amount} sent to ${name}`,
    };

    setNotifications([newNotification, ...notifications]);

    alert(`₹${amount} sent to ${name}`);

    setName("");
    setAmount("");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="send-container">
          <h2>Send Money</h2>

          <input
            type="text"
            placeholder="Recipient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <textarea placeholder="Add Note" />

          <button onClick={handleSend}>Send Money</button>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
