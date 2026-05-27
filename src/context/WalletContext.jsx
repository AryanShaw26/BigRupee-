import { createContext, useState } from "react";
import transactionData from "../data/transaction.json";

export const WalletContext = createContext();

function WalletProvider({ children }) {

  const [balance, setBalance] = useState(25680);

  const [transactions, setTransactions] =
    useState(transactionData);

  const [notifications, setNotifications] =
    useState([]);

  return (

    <WalletContext.Provider
      value={{
        balance,
        setBalance,

        transactions,
        setTransactions,

        notifications,
        setNotifications
      }}
    >

      {children}

    </WalletContext.Provider>

  );
}

export default WalletProvider;