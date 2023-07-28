export function currencyFormat(value: number) {
  return value.toLocaleString('BRL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
