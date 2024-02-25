/**
 * Slices a given string to a maximum length and appends ellipsis if necessary.
 *
 * @param {string} text - The input string to be sliced.
 * @param {number} [max=100] - The maximum length of the sliced string. Defaults to 100.
 * @returns {string} The sliced string with ellipsis if necessary.
 */
export function stringSlicer(text: string, max: number = 100) {
  if (text.length < max) return text;
  return ` ${text.slice(0, max)} ...`;
}
