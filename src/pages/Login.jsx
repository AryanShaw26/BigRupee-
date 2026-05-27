import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLogin=()=>{

const user=JSON.parse(
localStorage.getItem("user")
);

if(
user &&
user.email===email &&
user.password===password
){

navigate("/");

}
else{

alert("Invalid Credentials");

}

}

return(

<div className="auth-container">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

<p>
Don't have an account?
<Link to="/signup"> Signup</Link>
</p>

</div>

)

}

export default Login;