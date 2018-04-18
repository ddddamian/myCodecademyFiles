let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// split the story string into individual words
let storyWords = story.split(" ");

// log how many words are in the story to the console
console.log("There are " + storyWords.length + " words in the original story.");

// Iterate over your array to filter out unncessary words. 
let betterWords = storyWords.filter(function(word){
  if(unnecessaryWords.includes(word) === false) {
    return word;
  }
});
//console.log(betterWords);


// variables for counting how many times an overused word is used
let overused0 = 0;
let overused1 = 0;
let overused2 = 0;
// variable for counting the number of sentences
let sentences = 0;

// loop through each word and check if it is an overused word
for(let word in betterWords) {
  if(betterWords[word] === overusedWords[0]) {
     overused0 ++;
  } else if(betterWords[word] === overusedWords[1]) {
     overused1 ++;
  } else if(betterWords[word] === overusedWords[2]) {
     overused2 ++;
  }
}

// split the story into individual letters
let letters = story.split("");

// loop through each letter and count each '.' or '!'
for(letter in letters) {
  //console.log("The letter is " + letters[letter]);
  if(letters[letter] === "." || letters[letter] === "!"){
    sentences++;
  }
}


console.log("The improved word count is now " + betterWords.length + ".");
console.log("The sentence count is " + sentences + ".");
console.log("'" + overusedWords[0] + "' is used " + overused0 + " times.");
console.log("'" + overusedWords[1] + "' is used " + overused1 + " times.");
console.log("'" + overusedWords[2] + "' is used " + overused2 + " times.");

console.log(betterWords.join(" "));

