import { useEffect, useState } from "react";
import '../styles/userlist.css';

const UserList = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:1000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchdata()
    }, [])
    let handleremove = (id, name) => {
        setUser(user.filter((x) => x.id !== id))
        alert(`${name} has been removed`)
    }

    return (
        <div className="userlist">
            <h1 style={{textAlign:"center"}}>User List : {user.length} </h1>
            <div className="user_section">
            {
                user.map((data) => (
                    <div className="users">
                        <h1>Name : {data.name}</h1>
                        <h2>Age : {data.age}</h2>
                        <h3>Email : {data.email}</h3>
                        <button className="rem" onClick={() => { handleremove(data.id, data.name) }}>Remove</button>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default UserList;