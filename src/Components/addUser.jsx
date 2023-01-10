import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css';

const AddUser = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        let userdata = { name, age, email, phone }
        fetch('http://localhost:1000/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata)
        })
        alert("User added succesfully")
        navigate('/admin/user-list')
    }
    return (
        <div className="adduser">
            <h1 style={{ textAlign: "center", color: "red", textDecoration: "underline 4px black" }}>Add a new User</h1>
            <div className="userform">
                <form action="" onSubmit={handleSubmit}>
                    <div className="userdiv">
                        <div className="name"><input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                        <div className="age"><input type="text" placeholder="Enter your Age" min="0" max="100" value={age} onChange={(e) => setAge(e.target.value)} /></div>
                        <div className="email"><input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                        <div className="phone"><input type="tel" placeholder="Enter your Phone No." minLength="10" maxLength="10" required value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
                        <div ><button className="btn">Add User</button></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUser;