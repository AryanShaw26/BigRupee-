import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaQrcode } from "react-icons/fa";

function ReceiveMoney() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const upiId =
    `${user?.name?.toLowerCase().replace(/\s+/g, "")}@bigrupee`;

  const handleShare = async () => {

    if (navigator.share) {

      try {

        await navigator.share({

          title: "Big Rupee UPI",

          text: `Pay me using UPI ID: ${upiId}`

        });

      } catch (error) {

        console.log(error);

      }

    } else {

      navigator.clipboard.writeText(
        upiId
      );

      alert(
        "UPI ID copied to clipboard"
      );

    }

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="receive-container">

          <h2>Receive Money</h2>

          <div className="qr-box">

            <FaQrcode size={150} />

          </div>

          <h3>Your Name</h3>

          <p>
            {user?.name || "User"}
          </p>

          <h4>UPI ID</h4>

          <p>
            {upiId}
          </p>

          <button onClick={handleShare}>
            Share QR
          </button>

          <button className="request-btn">
            Request Money
          </button>

        </div>

      </div>

    </div>

  );

}

export default ReceiveMoney;