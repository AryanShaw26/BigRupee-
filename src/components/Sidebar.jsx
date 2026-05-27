import {
  FaHome,
  FaPaperPlane,
  FaDownload,
  FaHistory,
  FaBell,
  FaUser,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>₹ Big Rupee</h2>

      <ul>
        <li>
          <Link to="/">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/send">
            <FaPaperPlane /> Send Money
          </Link>
        </li>

        <li>
          <Link to="/receive">
            <FaDownload /> Receive Money
          </Link>
        </li>

        <li>
          <Link to="/transactions">
            <FaHistory /> Transactions
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            <FaBell /> Notifications
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUser />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
