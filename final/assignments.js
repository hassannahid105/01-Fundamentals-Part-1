/* const country = "Bangladesh";
const continent = "Asia";
let population = "170 million";
console.log(country, continent, population);

const markWeights = 78;
const markHeight = 1.69;
const jhonWeights = 92;
const jhonHeight = 1.95;

const markBmi = markWeights / markHeight ** 2;
const jhonBmi = jhonWeights / (jhonHeight * jhonHeight);

const markhigherBmi = markBmi > jhonBmi;

console.log(markBmi, jhonBmi, markhigherBmi);
 */
/* const markWeights = 78;
const markHeight = 1.69;
const jhonWeights = 92;
const jhonHeight = 1.95;

const markBmi = markWeights / markHeight ** 2;
const jhonBmi = jhonWeights / (jhonHeight * jhonHeight);
console.log(markBmi, jhonBmi);

if (markBmi > jhonBmi) {
  console.log(`Mark's BMI (${markBmi} )is higher than Jhon's (${jhonBmi})`);
} else {
  console.log(`Jhon's BMI ${jhonBmi} is higher than Mark's ${markBmi}`);
}

let n = "9" + 1;
console.log(n); */

/* const avgDolphins = (96 + 108 + 101) / 3;

const avgKoalas = (88 + 120 + 110) / 3;

console.log(avgDolphins, avgKoalas); */

// if (avgDolphins > avgKoalas) {
//   console.log("dolphin win");
// } else if (avgKoalas > avgDolphins) {
//   console.log("koalas win");
// } else {
//   console.log("both team wins");
// }

// if (avgDolphins > avgKoalas && (avgDolphins && avgDolphins) >= 100) {
//   console.log("dolphin win");
// } else if (avgKoalas > avgDolphins && (avgDolphins && avgDolphins) >= 100) {
//   console.log("koalas win");
// } else {
//   console.log("both team wins");
// }

/* const day = "wednesday";

if (day === "monday") {
  console.log(1);
} else if (day === "tuesday") {
  console.log(2);
} else if (day === "thusday" || day === "wednesday") {
  console.log(3);
} else if (day === "friday") {
  console.log(5);
} else if (day === "saturday") {
  console.log(6);
} else if (day === "sunday") {
  console.log(7);
} else {
  console.log("wrong");
} */

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 20;
console.log(
  `The bill was ${275}, the tip was ${tip}, and the total value ${bill + tip}.`
);
