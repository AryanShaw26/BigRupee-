import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function Notifications(){

const {notifications}
=
useContext(
WalletContext
);

return(

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>

<h2>Notifications</h2>

{
notifications.length===0
?

<p>No notifications</p>

:

notifications.map((item)=>(

<div
className="notification-card"
key={item.id}
>

{item.message}

</div>

))
}

</div>

</div>

)

}

export default Notifications;