import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/user/')
    }
    return (

        <div className="userlogin">
            <div className="form_container_card">
                <h1 className="log">Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <input type="email" className="inemail" required placeholder="Enter email" />
                        </div>
                        <div className="password">
                            <input type="password" className="inpassword" required placeholder="Enter password" />
                        </div>
                        <button className="loginu">Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
export default UserLogin;