import { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react'

import style from './InputForm.module.scss'

type PropsType = {
  value: string
  valuta?: string
  sx?: React.CSSProperties
}

export function InputForm({ value = '', valuta = 'RUB', sx }: PropsType) {
  const [inputValue, setInputValue] = useState(value)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setInputValue(value)
    calculateWidth(value)
  }, [value])

  const calculateWidth = (text: string) => {
    const baseCharWidth = 25
    const minWidth = 50
    const calculatedWidth = Math.max(text.length * baseCharWidth, minWidth)
    setWidth(calculatedWidth)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
    calculateWidth(newValue)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (inputValue.length === 0) {
        e.preventDefault()
      } else {
        calculateWidth(inputValue.slice(0, -1))
      }
    }
  }

  return (
    <div className={style.inputWrapper} style={sx}>
      <input
        className={style.inputForm}
        style={{ '--w': `${width}px` } as React.CSSProperties}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="0"
      />
      {valuta && <span className={style.postfix}>{valuta}</span>}
    </div>
  )
}
