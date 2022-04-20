import InputBox from "../../Generic/InputBox/InputBox";
import Button from "../../Generic/Button/Button";
import "./loginPage.css";
function LoginPage() {
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
          handleInput={null}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="Password"
          value=""
          handleInput={null}
        />
        <div className="login-radio">
          <input type="radio" value="PATIENT" name="role" />
          <label>Patient</label>
          <input type="radio" value="DOCTOR" name="role" />
          <label>Doctor</label>
          <input type="radio" value="ADMIN" name="role" />
          <label>Admin</label>
        </div>
        <Button value="SIGN IN" type="blue" />
        <div>
          Don't have an account? <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
