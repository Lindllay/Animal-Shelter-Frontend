const truncateString = (string, length) => {
  if (!string) return;
  const numberOfWords = string.split(/[\s]/).length + 1;
  const truncatedString = string.split(/[\s]/).slice(0, length).join(" ");
  const formattedString =
    numberOfWords > length ? truncatedString + "..." : truncatedString;

  return formattedString;
};

export default truncateString;
