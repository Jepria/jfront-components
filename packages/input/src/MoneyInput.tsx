import React from "react"
import { InputProps, DecimalInput } from "."
import { NumberFormatProps } from "react-number-format"

export const MoneyInput = React.forwardRef<
  HTMLInputElement,
  InputProps & NumberFormatProps
>((props, ref) => {
  return (
    <DecimalInput
      {...props}
      allowNegative={false}
      decimalScale={2}
      decimalSeparator="."
      thousandSeparator=" "
      fixedDecimalScale
      ref={ref}
    />
  )
})
