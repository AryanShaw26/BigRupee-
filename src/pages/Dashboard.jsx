import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TransactionCard from "../components/TransactionCard";
import { FaWallet } from "react-icons/fa";

import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function Dashboard() {

  const {
    balance,
    transactions
  } = useContext(WalletContext);

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="wallet-card">

          <FaWallet size={35}/>

          <h2>Wallet Balance</h2>

          <h1>₹{balance}</h1>

        </div>

        <div className="quick-actions">

          <div className="action-card">
            ✈ Send Money
          </div>

          <div className="action-card">
            ↓ Receive Money
          </div>

          <div className="action-card">
            + Add Money
          </div>

          <div className="action-card">
            □ Scan & Pay
          </div>

        </div>

        <h2>Recent Transactions</h2>

        {transactions.map((item)=>(

          <TransactionCard
            key={item.id}
            name={item.name}
            amount={item.amount}
            type={item.type}
          />

        ))}

      </div>

    </div>

  );
}

export default Dashboard;