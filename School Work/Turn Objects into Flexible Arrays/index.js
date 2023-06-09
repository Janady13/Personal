const obj = { one: 1, two: 2 };

for (const key in obj) {
  console.log('value', obj[key]);
}

//object.keys(), Object.values(), Object.entries()

const user ={
  name: 'John',
  age: 29 
};

Object.keys(user).includes("age");

Object.keys(user).map(key => user[key]);

// You can replace all the previous code that is written by using the Object.values()method

Object.values(user)

// If you console log this you get the same results as the code above.

//get the monthly total of all the expenses
const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};


// This is how you would get the total monthly cost of expenses useing Objects and the reduced function.
const total = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense , 0);

// Object.entries give you the array of arrays. It is splitting up the arrays and giving them back to you.

console.log(total)
console.log(values);
console.log(ageExists);