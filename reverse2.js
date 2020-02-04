const readlineSync = require("readline-sync");
const Min=1;
const Max=9007199254740991;

let Positive=Number(readlineSync.question("\nPositive integer: "));
let Order = "";
let Digit;

while (Number.isNan(Positive) ||  !Number.isInteger(Positive) || Positive > Max || Positive < Min) {
  Postive = Number(readlineSync.question("Positive integer: "));

}
while (Positive > 0.1) {
  Digit = Positive % 10;
  Positive = Math.floor(Positive / 10);
  if (Positive >= 1) {
    Order = Order + Digit + "."
  }
  else {
    Order = Order + Digit + ".\n"
  }
}
console.log("\n" + Order);

const readlineSync = require("readline-sync");



const MIN = Number.MIN_SAFE_INTEGER;

const MAX = Number.MAX_SAFE_INTEGER;
