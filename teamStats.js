/*

Team Stats
We want to create and extract information about your favorite sports team. 
Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.

*/

// object representing a team
let team = {
  // array of the players on the team
  _players: [
    {
      firstName: "Kenneth",
      lastName: "Zohore",
      age: 23
    },
    {
      firstName: "Joe",
      lastName: "Ralls",
      age: 24
    },
    {
      firstName: "Junior",
      lastName: "Hoilett",
      age: 27
    }
  ],
  
  // array of the games the team plays
  _games: [
    {
      opponent: "Fulham",
      teamPoints: 2,
      opponentPoints: 4
    },
    {
      opponent: "Preston",
      teamPoints: 0,
      opponentPoints: 1
    },
    {
      opponent: "QPR",
      teamPoints: 1,
      opponentPoints: 2
    }
  ],
  
  // getter method for players
  get players() {
    return this._players;
  },
  
  // getter method for games
  get games() {
    return this._games;
  },
  
  // method to add a player to the team
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    // adds the new player to the _players array
    this._players.push(player);
  },
  
  // method to add a game
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    // adds the new game to the _games array
    this._games.push(game);
  }
};

// add 3 new players to the team
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

// log all players
console.log(team.players);

// add 3 new games to the team
team.addGame("Mansfield", 2, 0);
team.addGame("Sunderland", 3, 1);
team.addGame("Sheffield Wed", 2, 2);

// log all games
console.log(team.games);
