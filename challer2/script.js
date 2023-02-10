const game = {
    team1 : 'Real ',
    team2 : 'mu',
    player : [
        [
            'neuer',
            'cr7',
            'martinez',
            'alaba',
            'messi',
            'davies',
            'muller',
            'neymar',
            'm3p',
            'lwds',
            'siuuuuuuuuuuuu',
        ],
        [
            'bruki',
            'sancho',
            'kante',
            'brandt',
            'gotze',
            'hakimi',

        ],
    ],
    score: '4:0',
    scored: ['lewandowski','gnarby','cr7','hulmer'],
    Date: 'Nov 9th 2023',
    odds: {
        team1: 1.33,
        x:3.25,
        team2:6.5,
    },
};



//1 .
for(const [i, player]  of game.scored.entries())
    console.log(`Goal, ${i + 1}: ${player}`);  

//2 .   
const odds = Object.values(game.odds);
let average = 0;
for(const odd of  odds) average += odd;
average /= odds.length;  
console.log(average)

//3
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr =  team === 'x' ? 'draw':  `victory ${game[team]}`;
    console.log (`Odd of ${teamStr} ${odd}`);
}