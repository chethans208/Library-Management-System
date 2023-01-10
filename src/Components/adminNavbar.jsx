import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="logo">
                <h1 style={{ color: "white" }}>AdminPortal</h1>
            </div>
            <div className="nav">
                <Link to="/admin/" >Dash Board</Link>
                <Link to="/admin/add-book" >Add Books</Link>
                <Link to="/admin/user-list" >UserList</Link>
                <Link to="/admin/book-list" >Books List</Link>
                <Link to="/admin/add-user" >Add user</Link>
            </div>
            <div className="logout">
                <Link to="/" >Logout</Link>
            </div>
        </div>
    );
}

export default AdminNavbar;