function pigIt(str) {
  let arr = str.split(" ");
  let updatedArr = arr.map((word) => {
    if (word.match(/[a-zA-Z]/)) {
      firstLetter = word[0];
      word = word.slice(1);
      let updatedWord = word + firstLetter + "ay";
      return updatedWord;
    } else {
      return word;
    }
  });
  let updatedStr = updatedArr.join(" ");
  return updatedStr;
}
