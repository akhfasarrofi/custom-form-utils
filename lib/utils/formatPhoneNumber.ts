/**
 * Formats a phone number string into a specific format.
 * @param phoneNumberString - The phone number string to be formatted.
 * @returns The formatted phone number string in the format XXXX-XXXX-XXXX, or null if the input is invalid.
 */
const formatPhoneNumber = (phoneNumberString: string) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return null;
};

export default formatPhoneNumber;
