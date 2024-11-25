/**
 * Converts a file to its base64 representation.
 * @param file - The file to convert.
 * @returns A promise that resolves to the base64 representation of the file.
 */
function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

export default getBase64
