export function firstLetterUpperCase(str: string) {
  const firstLetter = str[0].toUpperCase();
  return `${firstLetter}${str.toLowerCase().slice(1)}`;
}
