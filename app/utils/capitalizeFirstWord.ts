export const capitalizeFirstWord = (text: string) => {
  const firstWord = (
    text.indexOf(' ') ? text.split(' ')[0] : text
  ).toLowerCase();

  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
};
