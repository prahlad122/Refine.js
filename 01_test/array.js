// const pld=["hey","everyone"];
// console.log(pld);

const marvel_heros=["superman","spiderman","Thor"];
const dc_heros=["flash","batman","balveer"];

console.log(marvel_heros.concat(dc_heros));
console.log(marvel_heros.concat(...dc_heros)); //this is best way


let score1=343;
let score2=444;
let score3=423;

console.log(Array.of(score1,score2,score3));