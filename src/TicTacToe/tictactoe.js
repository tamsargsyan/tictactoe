import React from "react"
import "./tictactoe.css"
import { useState } from "react"

const TicTacToe = (props) => {
    const [active, setActive] = useState(true)
    const [board, setBoard] = useState(Array(+props.val).fill("").map(() => Array(+props.val).fill("")))
    const [player, setPlayer] = useState("x")
    const [winner, setWinner] = useState("")
    const [draw, setDraw] = useState(0)

    const checkWinner = () => {
        let diagnolFirst = []
        let diagnolSecond = []
        for(let i = 0; i < board.length; i++) {
            if(board[i].every((item, i, arr) => item === arr[0] && arr[0] === player)) return true
            
            diagnolFirst.push(board[i][i])
            diagnolSecond.push(board[i][board.length - i - 1])
        }

        if(diagnolFirst.every((item, i, arr) => item === arr[0] && arr[0] === player)) return true
        if(diagnolSecond.every((item, i, arr) => item === arr[0] && arr[0] === player)) return true

        const column = (arr, col) => arr.map(e => e[col])
        let j = 0
        while(j !== +props.val) {
            if(column(board, j).every((item, i, arr) => item === arr[0] && arr[0] === player)) return true
            j++
        }
        return 
    }
    
    const handleClick = (e) => {
        let index = +e.target.id
        let result = [...board]
        for(let i = 0; i < result.length; i++) {
            for(let j = 0; j < result[i].length; j++) {
                    if(((i + j) + ((props.val - 1) * i)) === index) {                  
                        if(result[i][j] !== "" || !active) return
                          else {
                            e.target.innerHTML = player
                            e.target.style.backgroundColor = "#F0D9FF"
                            result[i][j] = player

                    }
                }
            }
        }

        setBoard(result)
        player === "x" ? setPlayer("o") : setPlayer("x")

        if(checkWinner()) {
            setActive(false)
            setWinner(player)
        } 
    }
    const renderWidth = () => {
        return `${450 - (+props.val * 10 - 10)}px`
    }
    let count = 0
    board.map((item, i) => {
        return item.map((cell, i) => {
            if(cell !== "") count++
        })
    })
    const renderCellsWidth = () => {
        const width = [143, 105, 82, 66]
        for(let i = 0; i < width.length; i++) {
            if(+props.val === i+3) return width[i]
        }
    }
    return (
        <div className="container" style={{width: renderWidth()}}>
            {[...Array(props.val**2)].map((_, i) => {
                return (
                    <div 
                        className="cell" 
                        key={i} 
                        id = {i} 
                        onClick={handleClick} 
                        style = {
                            {
                                width: `${renderCellsWidth()}px`, 
                                height: `${renderCellsWidth()}px`
                            }
                        }>

                    </div>
                )
            })}
            {winner ? 
                <h1>{winner} won</h1> 
                    : 
                <h1>{player}'s turn</h1>
                    ?
                winner === "" && count === props.val ** 2 ? <h1>It's draw</h1>
                    :
                <h1>{player}'s turn</h1>
                    :
                ""
            }

        </div>
    )
}

export default TicTacToe