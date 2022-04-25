import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
function SideBarRoute({icon,value,color,path})
{
    return <NavLink className="sidebar-route" to={path}>
        <div><Icon path={icon}
          color={color} className="s-icon"/></div>
        <div>{value}</div>
    </NavLink>
}
export default SideBarRoute