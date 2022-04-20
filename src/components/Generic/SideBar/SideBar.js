import "./sidebar.css";
import SideBarRoute from "./SideBarRoute.js";
function SideBar({ links = [] }) {
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
