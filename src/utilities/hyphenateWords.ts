function hyphenateWords(string: string): string {
  const newString = string.toLowerCase().split(' ').join('-');
  return newString;
}

export { hyphenateWords };
