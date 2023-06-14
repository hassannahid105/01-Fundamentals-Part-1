/* let population = 17;
const country = "Bangladesh";
const isIsland = false;
const continent = "Asia";
let language;
language = "English";
const average = population / 2;
population++;
console.log(population > 6);

console.log(population > 33);
const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

console.log(description);
if (population > 33) {
  console.log("Bangladesh's population is above average");
} else {
  console.log(`Bangladesh's population is 33 million below average`);
}

if (language === "English" && population < 50 && !isIsland) {
  console.log("You should live in Portugal");
} else {
  console.log("Bangladesh does not meet your criteria");
} */
// } else if (population < 50) {
//   console.log("ok");
// } else if (!isIsland) {
//   console.log("ok");
//

// country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// const numNeighbours = Number(prompt("we have"));

// if (numNeighbours === 1) {
//   console.log(`we have ${numNeighbours} neighbour countries`);
// } else if (numNeighbours > 1) {
//   console.log(`we have ${numNeighbours} neighbour countries`);
// } else {
//   console.log(`No border`);
// }
/* let placeL = 1;
switch (placeL) {
  case 1:
    console.log("Chinese");
    console.log("Mandarin");
    break;
  case 2:
    console.log("Spanish");
    break;
  case 3:
    console.log("English");
    break;
  case 4:
    console.log("Hinde");
    break;
  case 5:
    console.log("Arabic");
    break;
  default:
    console.log("Great language");
} */

/* const population = 17;
const average =
  population > 33
    ? "Portugal population is above average"
    : "Portugal population is below average";
console.log(average);
 */

/* const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and it's 
  capital city is ${capitalCity}`;
};

const bangladesh = describeCountry("Bangladesh", 170, "Dhaka");
const india = describeCountry("Indai", 2000, "Dheli");

console.log(bangladesh, india);
 */

/*
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;

} 
const china2 = percentageOfWorld1(1441);
const bangladesh2 = percentageOfWorld1(170);
const india2 = percentageOfWorld1(2000);
*/
// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };
/* const percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
};
const china = percentageOfWorld3(1441);
const bangladesh = percentageOfWorld3(170);
const india = percentageOfWorld3(2000);

console.log(china);
console.log(bangladesh);
console.log(india); */

//Functions Calling Other Functions
/* const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const describePopulation = function (country, population, percentage) {
  return `${country} has ${population} million people,
  which is about ${percentage} of the world`;
};

// population  variable
const populationBangladesh = 170;
const populationChina = 1441;
// percentage
const banpercentage = percentageOfWorld1(populationBangladesh);
const chipercentage = percentageOfWorld1(populationChina);
// bangladesh
const bangladesh = percentageOfWorld1(populationBangladesh);
const countryBangladesh = describePopulation(
  "bangladesh",
  populationBangladesh,
  banpercentage
);
// china
const china = percentageOfWorld1(populationBangladesh);
const countrychina = describePopulation(
  "china",
  populationChina,
  chipercentage
);
//
console.log(countrychina);
console.log(countryBangladesh);
 */
/*
const neighburos = ["India", "Japan", "Sewden", "Katar"];
neighburos.push("Utopia");
neighburos.pop();
 for (let i = 0; i < neighburos.length; i++) {
  if (neighburos[i] !== "Germany") {
    console.log(`Probably not a central European country :D`);
  }
} 
if (!neighburos.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
} else {
  console.log("Germay");
}

console.log(neighburos.indexOf("Japan"));
neighburos[1] = "Dubai";
neighburos.push = "Germany";
*/
/* 
const myCountry = {
  country: "Bangladesh",
  capital: "Dhaka",
  language: "Bangla",
  population: 170,
  neighbours: ["India", "Japan", "kuwait", "Germany"],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital}`);
  },
};

console.log(myCountry.capital);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries   and a capital called ${myCountry.capital}.`
);
myCountry.population++;
myCountry.population++;
myCountry["population"] -= 2;
// myCountry["population"] -= 2;
console.log(myCountry.population);
myCountry.describe();

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
 */

const populations =[12, 34, 56,67];

for (let i = 0; i < populations.length; i++){
  const perc = pe
}