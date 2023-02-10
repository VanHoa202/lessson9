const gameEvents  = new Map([
        [17, 'Goal '],
        [36, 'Substitution '],
        [47, 'Goal '],
        [61, 'Substitution '],
        [61, 'Yellow card '],
        [69, 'Red card '],
        [70, 'Substitution '],
        [72, 'Substitution '],
        [76, 'Goal '],
        [80, 'Goal '],
        [92, 'Yellow card '],


]);

//1 
const events = new  Set (gameEvents.values());
console.log (events);


//2 
gameEvents.delete(64);

//3

console.log (` an event  happened , on  average , every ${gameEvents.size / 90 } miunutes`);
const time =  [...gameEvents.key()].pop();
console.log(time);
console(
    ` an event  happened , on  average , every ${gameEvents.size / 90 } miunutes`
);


//4
for( const [min ,event ] of gameEvents){
    const half = min <= 45 ?  'firt ' : 'second';
    console.log (`[${half}half] ${min}:  ${event}`);
}   



