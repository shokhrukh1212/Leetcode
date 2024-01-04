var lengthOfLastWord = function (s) {
  const arrayOfWords = s.trim();
  const lastSpaceIndex = arrayOfWords.lastIndexOf(" ");
  return arrayOfWords.slice(lastSpaceIndex + 1).length;
};
