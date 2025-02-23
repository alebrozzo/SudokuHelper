import { useState } from 'react'
import { SudokuCell } from './SudokuCell'
import './SudokuBoard.css'

export const SudokuBoard = () => {
  const [board, setBoard] = useState<(number | null)[][]>(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null))
  )

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
            />
          ))}
        </div>
      ))}
    </div>
  )
}
