type SudokuCellProps = {
  value: number | null
  onChange: (value: number | null) => void
}

export const SudokuCell = ({ value, onChange }: SudokuCellProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (newValue === '') {
      onChange(null)
    } else {
      const num = parseInt(newValue)
      if (num >= 1 && num <= 9) {
        onChange(num)
      }
    }
  }

  return (
    <div className="cell-container">
      {value ? (
        <input type="number" min="1" max="9" value={value} onChange={handleChange} className="sudoku-cell" />
      ) : (
        <>
          <input type="number" min="1" max="9" value="" onChange={handleChange} className="sudoku-cell" />
          <div className="pencil-marks">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <span key={num} className={`pencil-mark pos-${num}`}>
                {num}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
