import { useState } from "react"



export const useCounter = (value) =>{

    const [counter, setCounter] = useState(value)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        // if (counter === 0) return
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}