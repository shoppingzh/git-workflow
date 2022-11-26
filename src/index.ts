import { isNumber } from 'lodash'

export function plus(a: number, b: number) {
  if (!isNumber(a) || !isNumber(b)) throw new Error('is not number')
  return a + b
}
