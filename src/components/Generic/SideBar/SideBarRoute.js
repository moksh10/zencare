import Icon from '@mdi/react';
function SideBarRoute({icon,value,color})
{
    return <div className="sidebar-route">
        <div><Icon path={icon}
          color={color} className="s-icon"/></div>
        <div>{value}</div>
    </div>
}
export default SideBarRoute