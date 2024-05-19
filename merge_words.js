var word1 = "abc";
var word2 = "def";

function mergeWords(word1, word2) {
  let returnWord = "";
  let j = 0;
  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      returnWord += word1[i];
      returnWord += word2[j];
      j++;
    }
  }
}

mergeWords(word1, word2);
