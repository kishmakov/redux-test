export const INC_ACCOUNT = 'INC_ACCOUNT'

export function increment(ammount) {
  return { type: INC_ACCOUNT, ammount }
}
