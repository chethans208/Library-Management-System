import { Link } from "react-router-dom";
import '../styles/userNavbar.css';
const UserNavbar = () => {
    return (
        <div className="usernavbar">
            <div className="logo">
                <h1 style={{ color: "white" }}>UserPortal</h1>
            </div>
            <div className="nav">
                <Link to="/user/" >Dash Board</Link>
                <Link to="/user/book-list" >Books List</Link>
            </div>
            <div className="logout">
                <Link to="/" >Logout</Link>
            </div>
        </div>
    );
}

export default UserNavbar;