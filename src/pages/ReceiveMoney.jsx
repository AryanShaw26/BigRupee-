import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaQrcode } from "react-icons/fa";

function ReceiveMoney() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="receive-container">

          <h2>Receive Money</h2>

          <div className="qr-box">

            <FaQrcode size={150}/>

          </div>

          <h3>Your Name</h3>
          <p>Aryan Shaw</p>

          <h4>UPI ID</h4>
          <p>aryan@bigrupee</p>

          <button>
            Share QR
          </button>

          <button className="request-btn">
            Request Money
          </button>

        </div>

      </div>

    </div>

  )
}

export default ReceiveMoney;