// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

function mostCommonLetter(string) {
  // initiate object to hold occurrences
  let occurrences = {};
  let max = 0;
  let mostOccurring = "";
  // split string into an array
  const letters = string.split(" ").join("");
  // loop through the array and add to object
  for (let i = 0; i < letters.length; i++) {
    if (occurrences[letters[i]]) {
      occurrences[letters[i]]++;
      if (occurrences[letters[i]] > max) {
        max = occurrences[letters[i]];
        mostOccurring = letters[i];
      }
    } else {
      occurrences[letters[i]] = 1;
    }
  }
  // iterate through object and return most common character
  console.log(mostOccurring);
}

mostCommonLetter("peter piper picked a peck of pickled peppers");
