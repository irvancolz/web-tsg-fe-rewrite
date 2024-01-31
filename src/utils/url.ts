export function normalizeString(encodedString: string) {
  try {
    const decodedString = decodeURIComponent(encodedString);
    const normalizedString = decodedString.replace(/\s+/g, " ");

    return normalizedString;
  } catch (error) {
    console.error("Error decoding URI component:", error);
    return encodedString;
  }
}
