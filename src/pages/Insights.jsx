import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function Insights() {

  const { transactions } =
    useContext(WalletContext);

  const spent = transactions
    .filter(item =>
      item.amount.startsWith("-")
    )
    .reduce(
      (sum, item) =>
        sum +
        Number(
          item.amount.replace(/[^\d]/g, "")
        ),
      0
    );

  const received = transactions
    .filter(item =>
      item.amount.startsWith("+")
    )
    .reduce(
      (sum, item) =>
        sum +
        Number(
          item.amount.replace(/[^\d]/g, "")
        ),
      0
    );

  const largestTransaction =
    Math.max(
      ...transactions.map(item =>
        Number(
          item.amount.replace(/[^\d]/g, "")
        )
      )
    );

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <h2>📊 Spending Insights</h2>

        <div className="insights-grid">

          <div className="insight-card">
            <h3>Total Spent</h3>
            <h1>₹{spent}</h1>
          </div>

          <div className="insight-card">
            <h3>Total Received</h3>
            <h1>₹{received}</h1>
          </div>

          <div className="insight-card">
            <h3>Total Transactions</h3>
            <h1>{transactions.length}</h1>
          </div>

          <div className="insight-card">
            <h3>Largest Transaction</h3>
            <h1>₹{largestTransaction}</h1>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Insights;