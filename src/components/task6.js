import { useEffect, useState } from "react";

const Task6 = () => {

    const [seconds,setSeconds] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds+1)
        },1000)
    })

    return (
        <div>
            {seconds}
        </div>
    );
};


export default Task6;