// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(inventory){
    return inventory.reduce((acc, e) => {return acc + e.price * e.quantity}, 0);  
}

//inventory.map(e => acc + e.price * e.quantity, 0);

console.log("inventory's total value : " + getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]));

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory){
    let count = 0;
    inventory.forEach(product => {
        if (product == '🍌' ){
            count++;
        }
    });
    return count;
}

console.log("there are " + countBanana(['🥑','🍌','🥭', '🍌']) + " bananas.")

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function filterEvenNumbers(nums){
        return nums.filter(num => num % 2 == 0);
    }

    console.log(filterEvenNumbers(numbers));

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]

function squareNumbers(numbers){
    return numbers.map(number => number**2);
}

console.log(squareNumbers([1, 2, 3, 4, 5]));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5
function findMax(numbers){
    return numbers.reduce((a, b) => {return Math.max(a,b)} ,0);
}

console.log(findMax([1, 2, 3, 4, 5]));

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5

function calculateAverageAge(people){
    return (people.reduce((acc, e) => {return (acc + e.age) }, 0)) / people.length;
}

console.log(calculateAverageAge([
            { name: "Juan", age: 25 },
            { name: "Carla", age: 30 },
            { name: "Lucia", age: 35 },
            { name: "El Chengue", age: 49 }
            ]));

// 07 - function  combinedHobbies(people)
// Function to combine hobbies from all people

// const people = [
//     {
//       name: 'Paula',
//       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
//     },
//     {
//       name: 'Martin',
//       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
//     },
//     {
//       name: 'Juan',
//       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
//     },
//     {
//       name: 'Veronica',
//       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
//     }
//   ];

// combinedHobbies(people)
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]

function combinedHobbies(people){
    return people.reduce((conc, e) => {return conc.concat(e.hobbies)}, []);
}

console.log(combinedHobbies([
         {
          name: 'Paula',
          hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
        },
        {
          name: 'Martin',
          hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
        },
        {
          name: 'Juan',
          hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
        },
       {
          name: 'Veronica',
          hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
         }
       ]));


// 08 - function printChemicalInfo(chemicals)
const chemicals = [
    {
      compoundId: 'CHEM001',
      name: 'Aspirin',
      formula: 'C9H8O4',
      description: 'Aspirin is a common medication used to reduce pain and inflammation.',
      molecularWeight: '180.16 g/mol',
      meltingPoint: '135°C',
      boilingPoint: '140°C',
      solubility: 'Slightly soluble in water'
    },
    {
      compoundId: 'CHEM002',
      name: 'Caffeine',
      formula: 'C8H10N4O2',
      description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
      molecularWeight: '194.19 g/mol',
      meltingPoint: '238°C',
      boilingPoint: '178°C',
      solubility: 'Freely soluble in water'
    },
    {
      compoundId: 'CHEM003',
      name: 'Ethanol',
      formula: 'C2H6O',
      description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
      molecularWeight: '46.07 g/mol',
      meltingPoint: '-114.1°C',
      boilingPoint: '78.37°C',
      solubility: 'Miscible with water'
    }
  ];

  function printChemicalInfo(chemicals) {
    chemicals.forEach(chemical => {
      const line = '+-------------------------------------------------------+';
      console.log(line);
      console.log(`| Compound ID: ${chemical.id.padEnd(45)}|`);
      console.log(`| Name: ${chemical.name.padEnd(50)}|`);
      console.log(`| Formula: ${chemical.formula.padEnd(47)}|`);
      console.log(`| Description: ${chemical.description.padEnd(47)}|`);
      console.log(`| Molecular Weight: ${chemical.molecularWeight.padEnd(37)}|`);
      console.log(`| Melting Point: ${chemical.meltingPoint.padEnd(40)}|`);
      console.log(`| Boiling Point: ${chemical.boilingPoint.padEnd(40)}|`);
      console.log(`| Solubility: ${chemical.solubility.padEnd(43)}|`);
      console.log(line);
    });
  }

  //printChemicalInfo(chemicals); (sin terminar!!)


// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];

// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']

function getGetUniqueGuestList(guestList) {
    const uniqueGuest = new Set(guestList);
    return [...uniqueGuest];
}
console.log(getGetUniqueGuestList(['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️']));

// 10 - function showUserProfiles(user)
// User data

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
      social: {
         twitter: 'carol.smith',
         facebook: 'carol.smith77'
     }
   }
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
      email: 'jane.smith@example.com'
    }
};


function showUserProfile(user){
  let profileData = [];

    if (user.profile.social) {
        if (user.profile.social.twitter) {
            profileData.push(user.profile.social.twitter);
        }
        if (user.profile.social.facebook) {
            profileData.push(user.profile.social.facebook);
        }
    }

    if (user.profile.email) {
        profileData.push(user.profile.email);
    }

    console.log(profileData.join(', '));
}

  showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
  showUserProfile(user2); // Expected output: 'jane.smith@example.com'

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output

const leaderBoard = [
  { player: "John", score: 80 },
  { player: "Charlie", score: 20 },
  { player: "Julio", score: 50 },
  { player: "Bob", score: 80 },
  { player: "Bobby", score: 11 },
  { player: "Tommy", score: 43 },
  { player: "Eric", score: 99 },
  { player: "Alice", score: 100 },
  { player: "Alfred", score: 30 },
];

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

function sortLeaderBoardByScoreDesc(leaderBoard){
    return leaderBoard.toSorted((a, b) => b.score - a.score);
}

console.log(sortLeaderBoardByScoreDesc(leaderBoard));

// 12 - function

function getTopFiveWorstPlayers(leaderBoard) {
  const sortedLeaderBoard = leaderBoard.toSorted((a, b) => a.score - b.score);
  return sortedLeaderBoard.slice(0, 5);
}

console.log(getTopFiveWorstPlayers(leaderBoard));

// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

// 13 - function safeCopy()
const companyHierarchy = {
    name: 'Company',
    departments: [
      {
        name: 'Engineering',
        head: 'Alice',
        subDepartments: [
          {
            name: 'Backend',
            head: 'Bob',
            employees: ['Charlie', 'David']
          },
          {
            name: 'Frontend',
            head: 'Eve',
            employees: ['Frank', 'Grace']
          }
        ]
      },
      {
        name: 'Sales',
        head: 'Henry',
        employees: ['Isaac', 'Jane']
      }
    ]
  };

// Deep copy function
// function safeCopy(obj) {
//      ToDo (complete the function here...)
//  }
function safeCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => safeCopy(item));
  } else if (obj !== null && typeof obj === 'object') {
    let copiedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObj[key] = safeCopy(obj[key]);
      }
    }
    return copiedObj;
  }
  return obj;
}

//   // Example usage
  const copiedHierarchy = safeCopy(companyHierarchy);

//   // Modify the copied hierarchy
  copiedHierarchy.departments.push({
    name: 'Marketing',
    head: 'Karen',
    employees: ['Liam', 'Mia']
  });

//   // Verify independence
  console.log('Original Company Hierarchy:');

  // Cuando el objeto contiene arreglos u objetos anidados, 
  // estos se representan como [Array] en la salida para evitar una impresión excesiva de datos.
  console.log(companyHierarchy);

  // verificacion con el JSON.stringify
  console.log(JSON.stringify(companyHierarchy, null, 2));

  console.log('Copied Company Hierarchy with Modifications:');
  console.log(copiedHierarchy);
  console.log(JSON.stringify(copiedHierarchy, null, 2));
