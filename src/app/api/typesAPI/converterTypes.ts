// Request types
export type TPriceConverterRequest = {
  pairId: 133 | number //данное значение id временное, т.к. того требует ТЗ
  inAmount: number
  outAmount: null
}

// Response types
export type TPriceConverterResponse = {
  inAmount: string
  outAmount: string
  isStraight: boolean
  price: string[]
}
