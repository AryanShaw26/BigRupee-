import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSignup=()=>{

const user={
name,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

// remove alert
navigate("/login");

}

return(

<div className="auth-container">

<h2>Signup</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleSignup}>
Signup
</button>

<p>
Already have an account?
<Link to="/login"> Login</Link>
</p>

</div>

)

}

export default Signup;