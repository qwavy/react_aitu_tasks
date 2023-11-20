import { useState } from "react"

const Task4 = () => {
    const [counter,setCounter] = useState(0)

    const increment = () => {
        setCounter(counter+1)
    }
    const dicrement = () => {
        setCounter(counter-1)
    }
    
    return (
        <div>
            {counter}
            <button onClick={increment}>+</button>
            <button onClick={dicrement}>-</button>
        </div>
    )
}
export default Task4