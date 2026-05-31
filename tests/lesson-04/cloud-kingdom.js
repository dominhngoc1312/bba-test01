let playerName = "Mario";
let currentLives = 3;
const cointLvl1 = 25;
const cointLvl2 = 30;
const cointLvl3 = 45;

const cointTotal = cointLvl1+cointLvl2+cointLvl3;
const cointLvlAvg = ((cointLvl1+cointLvl2+cointLvl3)/3);
const cointRemaining = cointTotal % 3;
console.log(`So coin du khi tong so coin chia cho 3 la: ${cointRemaining} `);