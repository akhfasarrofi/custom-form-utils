/**
 * Shortens an arbitrary text to a specified length.
 *
 * @param {string} text - The text to be shortened.
 * @param {number} truncate - The maximum length of the shortened text.
 */
function shortenArbitraryText(text: string, truncate: number) {
  if (text.length > truncate) {
    return `${text.slice(0, truncate)}...`
  }
  return text
}

export default shortenArbitraryText
