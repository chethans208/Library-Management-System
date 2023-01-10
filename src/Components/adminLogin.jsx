import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';

const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let login = (e) => {
        e.preventDefault()
        let data = { email, password }
        //admin validation
        if (email === "admin@gmail.com" && password == "12345") {
            navigate('/admin/')
        } 
        else {
            alert('Invalid email or password')
        } 
    }
    return (
        <div className="adminlogin">
            <div className="form_container_card">
                <h1 className="log">Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <input type="email" className="inemail" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" className="inpassword" required placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login">Login</button>
                    </form>
                </div>



            </div>
        </div>
    );
}

export default AdminLogin;