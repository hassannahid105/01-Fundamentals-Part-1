const birthYear = 2091;

if (birthYear <= 2000) {
  console.log("Born in 20 century");
} else {
  console.log("Born in 21 century");
}

const favourite = 14;

if (favourite > 0) {
  console.log("great number");
} else {
  console.log("try something new");
}

const a = false;
if (!a) {
  console.log("its done");
}

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Asif is able to drive!");
} else {
  console.log("someone else should drive...");
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins0) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// const day = 'sat'
// switch(day){
//   case 'mon':
//   console.log('Plane Course structure');
//   console.log('Go to coding meetup');
//   break;
//   case "tues":

//     break;
//     case "t"
// }
const day = "thus";
if (day === "mon") {
  console.log("Plane Course structure");
  console.log("Go to coding meetup");
} else if (day === "tues") {
  console.log("Prepare theory video");
} else if (day === "wed" || day === "thus") {
  console.log("write code example");
} else if (day === "fri") {
  console.log("Record video");
} else if (day === "sat" || day === "sun") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
