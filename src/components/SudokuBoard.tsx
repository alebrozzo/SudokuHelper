import { useState } from 'react'
import { SudokuCell } from './SudokuCell'
import './SudokuBoard.css'

export const SudokuBoard = () => {
  const [board, setBoard] = useState<(number | null)[][]>(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null))
  )

  const getValidPencilMarks = (row: number, col: number): number[] => {
    const validNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

    // Check row
    board[row].forEach((num) => {
      if (num !== null) validNumbers.delete(num)
    })

    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] !== null) validNumbers.delete(board[i][col]!)
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3
    const boxCol = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const num = board[boxRow + i][boxCol + j]
        if (num !== null) validNumbers.delete(num)
      }
    }

    return Array.from(validNumbers)
  }

  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newBoard = board.map((r) => [...r])
    newBoard[row][col] = value
    setBoard(newBoard)
  }

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
              validPencilMarks={getValidPencilMarks(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
