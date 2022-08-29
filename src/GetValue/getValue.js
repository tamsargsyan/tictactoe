import React from "react"
import { useState } from "react"
import "./getValue.css"
import TicTacToe from "../TicTacToe/tictactoe"

const GetValue = () => {
    const [getValue, setGetValue] = useState(0)
    const [enterValue, setEnterValue] = useState("")

    return (
        <div className="main">
            <h1>The game is played on a grid that's 3x3, 4x4, 5x5, 6x6</h1>
            <h2>Input 3, 4, 5 or 6</h2>
            <form>
                <input type="text" onChange={(e) =>  setGetValue(+e.target.value)}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    getValue === 3 || getValue === 4 || getValue === 5 || getValue === 6 ? setEnterValue(getValue) : alert("Input is not valid")
                }}>Enter</button>
            </form>
            {enterValue && <TicTacToe val = {enterValue}/>}
        </div>
    )
}
export default GetValue