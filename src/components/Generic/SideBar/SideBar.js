import "./sidebar.css";
import SideBarRoute from "./SideBarRoute.js";
import { useAuth } from "./../../../states/Global State/Auth State/AuthState.js";
import { nav } from "./../../../states/SideBar/links.js";
function SideBar({ links = [] }) {
  const { user } = useAuth();
  const role = user.role;
  links = nav[role];
  const link = links.map((value, index) => (
    <SideBarRoute
      key={index}
      icon={value.icon}
      value={value.value}
      color={value.color}
    />
  ));
  return (
    <div className="sidebar">
      <h1>Navigation</h1>
      <div className="sidebar-routes">{link}</div>
    </div>
  );
}
export default SideBar;
