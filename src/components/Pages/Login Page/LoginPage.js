import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Generic/Button/Button";
import InputBox from "../../Generic/InputBox/InputBox";
import { authMap } from "../../../api map/authMap";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { toast } from "react-toastify";
import "./loginPage.css";
function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoading } = useLoadingContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleInput = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const login = authMap("login");
  const handleLogin = () => {
    if (
      loginData.email === "" ||
      loginData.password === "" ||
      loginData.role === ""
    ) {
     toast.error("Please fill all credentials to login");
      return;
    }
    setIsLoading(true);
    login(loginData).then((response) => {
      if (response.success) {
        setIsLoading(false);
        toast.success(response.message);
        setTimeout(() => {
          navigate("/app/profile");
        }, 1500);
      } else {
        setIsLoading(false);
        toast.error(response.message);
      }
    });
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h1 onClick={()=>navigate("/")}>Zencare</h1>

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
          <input
            type="radio"
            value="PATIENT"
            name="role"
            onChange={handleInput}
          />
          <label>Patient</label>
          <input
            type="radio"
            value="DOCTOR"
            name="role"
            onChange={handleInput}
          />
          <label>Doctor</label>
          <input
            type="radio"
            value="ADMIN"
            name="role"
            onChange={handleInput}
          />
          <label>Admin</label>
        </div>
        <Button
          value="SIGN IN"
          type="blue"
          handleClick={handleLogin}
          isDisabled={false}
        />
        <div>
          Don't have an account?{" "}
          <span onClick={() => navigate("/newpatient")}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
