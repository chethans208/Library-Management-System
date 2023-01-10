import { Link } from "react-router-dom";
import '../styles/landingPage.css';
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <h1 className="lib">Library Management System</h1>
                <Link to='/admin-login' className="admin">Admin Login</Link>
                <img src="images/admin.png" alt="" className="adimg" />
                <Link to='/user-login' className="user">User Login</Link>
                <img src="images/user.png" alt=""  className="usimg"/>
            </div>
        </div>
    );
}
export default LandingPage;