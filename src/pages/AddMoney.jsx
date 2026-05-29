import { useState, useContext } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { WalletContext }
from "../context/WalletContext";

function AddMoney() {

  const [amount,setAmount]
  = useState("");

  const {
    balance,
    setBalance,
    transactions,
    setTransactions,
    notifications,
    setNotifications
  }
  =
  useContext(
    WalletContext
  );

  const handleAddMoney = ()=>{

    if(!amount){

      alert(
        "Enter an amount"
      );

      return;
    }

    if(Number(amount)<=0){

      alert(
        "Enter a valid amount"
      );

      return;
    }

    setBalance(
      balance + Number(amount)
    );

    const newTransaction = {

      id: Date.now(),

      name: "Wallet Top Up",

      amount: `+₹${amount}`,

      type: "Received Money"

    };

    setTransactions([

      newTransaction,

      ...transactions

    ]);

    const newNotification = {

      id: Date.now(),

      message:
      `₹${amount} added to wallet`

    };

    setNotifications([

      newNotification,

      ...notifications

    ]);

    alert(
      `₹${amount} added successfully`
    );

    setAmount("");

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="send-container">

          <h2>
            Add Money
          </h2>

          <input

            type="number"

            placeholder=
            "Enter Amount"

            value={amount}

            onChange={(e)=>

              setAmount(
                e.target.value
              )

            }

          />

          <button
            onClick={
              handleAddMoney
            }
          >

            Add Money

          </button>

        </div>

      </div>

    </div>

  );

}

export default AddMoney;