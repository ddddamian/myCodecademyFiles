// If the user wants, he or she can enter his or her name in between the quotation marks. 
let userName = 'John';
// If the user enters a name, log "Hello, userName!", else log "Hello"
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// a string that is the question the user wants to ask the Magic Eight Ball
let userQuestion = 'Is the world round?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = "Don't count on it";
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`${userName} asks, "${userQuestion}"`);
console.log(`Magic Eight Ball says, "${eightBall}"`);
