import './header.css'
function Header({username})
{
    return (<div className="app-header">
        <div>Zencare</div>
        <div>{username}</div>
    </div>);

}
export default Header