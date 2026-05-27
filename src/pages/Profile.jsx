import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {

const navigate = useNavigate();

const user = JSON.parse(
localStorage.getItem("user")
);

const handleLogout = ()=>{

localStorage.removeItem(
"isLoggedIn"
);

navigate("/login");

};

return(

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>

<div className="profile-card">

<div className="profile-avatar">

👤

</div>

<h2>
{user?.name || "User"}
</h2>

<p>
{user?.email || "No Email"}
</p>

<button
className="logout-btn"
onClick={handleLogout}
>

Logout

</button>

</div>

</div>

</div>

)

}

export default Profile;