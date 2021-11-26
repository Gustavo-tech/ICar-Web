export function capitalizeText(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function removeAllCharFromString(text: string): string {
  let txt = ""

  for (let t of text) {
    if (!isNaN(Number.parseInt(t)))
      txt += t
  }

  return txt
}
