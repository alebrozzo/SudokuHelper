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

  return <input type="number" min="1" max="9" value={value || ''} onChange={handleChange} className="sudoku-cell" />
}
