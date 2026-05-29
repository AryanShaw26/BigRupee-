import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TransactionCard from "../components/TransactionCard";
import { FaWallet } from "react-icons/fa";

import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const { balance, transactions } = useContext(WalletContext);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* Wallet Card */}

        <div className="wallet-card">
          <FaWallet size={35} />

          <h2>Wallet Balance</h2>

          <h1>₹{balance}</h1>
        </div>

        {/* Quick Actions */}

        <div className="quick-actions">
          <div className="action-card" onClick={() => navigate("/send")}>
            ✈ Send Money
          </div>

          <div className="action-card" onClick={() => navigate("/receive")}>
            ↓ Receive Money
          </div>

          <div className="action-card" onClick={() => navigate("/add-money")}>
            💰 Add Money
          </div>

          <div className="action-card" onClick={() => navigate("/insights")}>
            📊 Insights
          </div>
        </div>

        {/* Recent Transactions */}

        <h2 style={{ marginTop: "40px" }}>Recent Transactions</h2>

        {transactions.map((item) => (
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
