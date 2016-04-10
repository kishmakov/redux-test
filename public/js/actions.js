export const CHOOSE_BUTTON = 'CHOOSE_BUTTON'

export function choose(buttonId) {
  return { type: CHOOSE_BUTTON, buttonId }
}
