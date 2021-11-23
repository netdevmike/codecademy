const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Kenny',
        lastName: 'Kawaguchi',
        age: 9
      },
      {
        firstName: 'Pete',
        lastName: 'Wheeler',
        age: 10
      }
  
    ],
    _games: [
      {
        opponent: 'Melonheads',
        teamPoints: 4,
        opponentPoints: 2,
      },
     {
        opponent: 'Roadrunners',
        teamPoints: 12,
        opponentPoints: 7,
      },
     {
        opponent: 'All-Stars',
        teamPoints: 8,
        opponentPoints: 5,
      },
    ],
  
    addPlayer (firstName, lastName, Age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: Age 
      }
      this._players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game);
    }
  
  };
  
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Goon Squad', 6, 5);
  
  console.log(team);