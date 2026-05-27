import { useState, useContext } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TransactionCard from "../components/TransactionCard";

import { WalletContext }
from "../context/WalletContext";

function TransactionHistory() {

  const [filter,setFilter]
  = useState("All");

  const {
    transactions
  } = useContext(
    WalletContext
  );

  const filteredData =
  transactions.filter((item)=>{

    if(filter==="All")
      return true;

    if(filter==="Sent")
      return item.type.includes(
        "Sent"
      );

    if(filter==="Received")
      return item.type.includes(
        "Received"
      );

  });

  return (

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>

<h2>
Transaction History
</h2>

<div className="filter-buttons">

<button
onClick={()=>
setFilter("All")
}
>
All
</button>

<button
onClick={()=>
setFilter("Sent")
}
>
Sent
</button>

<button
onClick={()=>
setFilter("Received")
}
>
Received
</button>

</div>

{
filteredData.map((item)=>(

<TransactionCard
key={item.id}
name={item.name}
amount={item.amount}
type={item.type}
/>

))
}

</div>

</div>

  );
}

export default TransactionHistory;