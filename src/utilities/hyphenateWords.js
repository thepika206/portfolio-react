function hyphenateWords(string){
  let newString = string.toLowerCase().split(' ').join('-')
  console.log(newString)
  return newString
}

export {
  hyphenateWords
}