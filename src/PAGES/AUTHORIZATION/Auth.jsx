import { useState } from "react";
import "./Auth.css";
import loginImage from '../../ASSETS/IMAGES/LOGIN.png';
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className={`container ${isSignUp ? "active" : ""}`}>

        {/* Left Side */}
        <div className="left-panel">
          <img
            src={loginImage}
            alt="Illustration"
            className="img"
          />
        </div>

        {/* Right Side */}
        <div className="right-panel">
         
          <div className="form login">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<select
  className="role-select"
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
  <option value="student">Student</option>
  <option value="committee">Committee</option>
  <option value="admin">Admin</option>
</select>

<button
  onClick={() => {
    if (role === "student") {
      navigate("/student");
    } else if (role === "committee") {
      navigate("/committee");
    } else if (role === "admin") {
      navigate("/admin");
    }
  }}
>
  Sign In
</button>

            <p>
              Don't have an account ?
              <span onClick={() => setIsSignUp(true)}>
                Sign Up
              </span>
            </p>
          </div>
          
          <div className="form register">
            <h1>Register</h1>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={() => navigate("/student")}>
              Register
            </button>

            <p>
              Already have an account ?
              <span onClick={() => setIsSignUp(false)}>
                Sign In
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Auth;