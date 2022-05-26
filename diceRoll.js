// there are 9 dots in a flex colum

// 147
// 258
// 369

// Player1 dice dot elements
const p1_d1 = document.getElementById("d1");
const p1_d2 = document.getElementById("d2");
const p1_d3 = document.getElementById("d3");
const p1_d5 = document.getElementById("d5");
const p1_d7 = document.getElementById("d7");
const p1_d8 = document.getElementById("d8");
const p1_d9 = document.getElementById("d9");

// game var
let diceRoll = 0;

// random Dice roll function
const diceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

d5.addEventListener("click", () => {
  diceRoll = diceNumber(1, 6);
  diceResult();
});

// dice face pattern
const df1 = [p1_d5];
const df2 = [d1, d9];
const df3 = [d3, d5, d7];
const df4 = [d1, d3, d7, d9];
const df5 = [d1, d3, d5, d7, d9];
const df6 = [d1, d2, d3, d7, d8, d9];

const diceFaceList = [df1, df2, df3, df4, df5, df6];
console.log(diceFaceList);

const diceResult = () => {
  resetDice();
  console.log(diceRoll);
  let searchFor = diceFaceList[diceRoll - 1];
  console.log(searchFor);
  let dfacelist = searchFor;
  for (let i = 0; i < dfacelist.length; i++) {
    dfacelist[i].style.backgroundColor = "#fff";
  }
};

const resetDice = () => {
  d1.style.backgroundColor = "#2a5a97";
  d2.style.backgroundColor = "#2a5a97";
  d3.style.backgroundColor = "#2a5a97";
  d5.style.backgroundColor = "#2a5a97";
  d7.style.backgroundColor = "#2a5a97";
  d8.style.backgroundColor = "#2a5a97";
  d9.style.backgroundColor = "#2a5a97";
};
