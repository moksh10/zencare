import { useAuth } from "../../../states/Global State/Auth State/AuthState";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header({ userName = "" }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const username=user.userName  
  return (
    <div className="app-header">
      <div onClick={() => navigate("/")}>Zencare</div>
      <div>{username}</div>
    </div>
  );
}
export default Header;
