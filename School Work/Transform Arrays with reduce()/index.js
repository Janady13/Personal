const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const totals = menuItems.reduce((accumulator, menuItems) => {
  console.log(`
    acummunlator: ${accumulator}
    Menu Item Price: ${menuItems.price}
  `)
  
  return accumulator + menuItems.price
})

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];


const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator + car.weight;
}, 0)

console.log(totalWeight);

const electric = cars.reduce((accumulator,car) => {
    if(car.isElectric){
        return accumulator + car.weight
    }else{
        return accumulator
    }
},0)



const numbers = [1, 2, 3, 4, 5, 6];

const number1 = numbers.reduce((acc, num) => {
     acc.push(num*2)
     return acc
},[])

//map array operation is the same operation just simpilar to code.
const doubleNumbers = numbers.map(num => num * 2);



const greaterNumbers = numbers.reduce((acc,num) => {
  if(num > 3){
      acc.push(num);
      
  }
  return acc
},[])



const smallerNumbers = numbers.reduce((acc,num) => {
  if (num <= 3){
      acc.push(num)
  }
  return acc
},[])


                  //short handed version of the code above
//greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);


console.log(electric)
console.log(number1);
console.log(doubleNumbers)
console.log(greaterNumbers)
console.log(smallerNumbers)