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


// 1.
const [player1, player2 ]= game.player;
console.log(player1,player2);

// 2.
const [gk, ...fieldPlayer] = player1;
console.log (gk , fieldPlayer);

// 3
 const allPlayer = [...player1 , ...player2];
 console.log (allPlayer)

 // 4

 const playFinal = [ ... player1 , 'cr7','neymar','m3p'];


 // 5

const {odds: {team1 ,x:draw , team2}} = game;
console.log (team1 , draw , team2);

//6 
const printsGoal = function(...player){
    console.log(player);
   console.log (`${player.length} goals were scored ` );
}
// printsGoal('cr7','neyma','m3p','muller');
// printsGoal('cr7','neyma','m3p');

printsGoal(...game.scored);


//7 

team1 < team2 && console.log (`team1 easy win game `);