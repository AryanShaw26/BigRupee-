import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>Dashboard</h1>

      <div className="nav-right">
        <span onClick={() => navigate("/notifications")} title="Notifications">
          🔔
        </span>

        <span onClick={() => navigate("/profile")} title="Profile">
          👤
        </span>
      </div>
    </div>
  );
}

export default Navbar;
