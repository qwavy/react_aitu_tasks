import { useState } from "react";

const Task3 = () => {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState(0)

    const handleClick = () => {
        console.log(userName)
        console.log(password)
    }

    return ( 
        <div>
            <input onChange={(e) => setUserName(e.target.value)}/>
            <input onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>asd</button>
        </div>
     );
}

export default Task3;