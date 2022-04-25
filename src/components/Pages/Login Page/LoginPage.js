import { useState } from "react";
import InputBox from "../../Generic/InputBox/InputBox";
import Button from "../../Generic/Button/Button";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [loginData,setLoginData] = useState({email:"",password:"",role:""})
  const handleInput = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
 
  return (
    <div className="login-body">
      <div className="login-container">
        <h1>Zencare</h1>

        <b>Hello! Let's get started!</b>
        <p>Sign in to continiue.</p>

        <InputBox
          type="text"
          name="email"
          placeholder="Email"
          value={loginData.email}
          handleInput={handleInput}
          isDisabled={false}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          handleInput={handleInput}
          isDisabled={false}
        />
        <div className="login-radio">
          <input type="radio" value="PATIENT" name="role" onChange={handleInput} />
          <label>Patient</label>
          <input type="radio" value="DOCTOR" name="role" onChange={handleInput}/>
          <label>Doctor</label>
          <input type="radio" value="ADMIN" name="role" onChange={handleInput}/>
          <label>Admin</label>
        </div>
        <Button value="SIGN IN" type="blue"/>
        <div>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
