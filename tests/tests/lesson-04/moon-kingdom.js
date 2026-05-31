function createCharacters() {
    const characters = [
        {
            name: 'nguyen thi tin',
            level: 10,
            health: 1000
        }
    ];


    const charactersPowerUp = characters.map(characters => (
        ({
            name: characters.name.toUpperCase(),
            level: characters.level * 2,
            health: characters.health * 3
        })
    ));

    const possibleWinners = charactersPowerUp.filter(
        character => character.health > 1000
    );

    console.log("Characters:", characters);
    console.log("Characters Power Up:", charactersPowerUp);
    console.log("Possible Winners:", possibleWinners);

    return {
        characters,
        charactersPowerUp,
        possibleWinners
    };
}
createCharacters();

//======

function printLeaderboard() {
    const players = [
        {
            name: 'Mario',
            score: 1000
        },
        {
            name: 'Mario1',
            score: 200
        },
        {
            name: 'Mario2',
            score: 500
        },
        {
            name: 'Mario3',
            score: 800
        }
    ];

    const sortedPlayers = players.sort(
        (a,b) => b.score - a.score
    );
    

    for (let i = 0; i < players.length; i++){
        let level = i+1; // hạng = vị trí trong mảng + 1 (vì mảng bắt đầu từ 0)
        let medal = "";
        if (level === 1){
            medal = "🥇" + players[i].name + "-" + players[i].score;
        }
        else if(level === 2){
            medal = "🥈" + players[i].name + "-" + players[i].score;
        }
        else if (level === 3){
            medal = "🥉" + players[i].name + "-" + players[i].score;
        }
         console.log(medal);
    }
    
   
}
printLeaderboard();
