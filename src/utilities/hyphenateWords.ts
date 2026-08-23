function hyphenateWords(string: string): string {
  let newString = string.toLowerCase().split(' ').join('-');
  return newString;
}

export { hyphenateWords };
