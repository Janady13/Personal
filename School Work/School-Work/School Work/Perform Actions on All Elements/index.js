const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 18, isRecordTemp: false},
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
  { degrees: 24, isRecordTemp: false },
  { degrees: 44, isRecordTemp: false },
  { degrees: 24, isRecordTemp: false },
  { degrees: 100, isRecordTemp: false },
  { degrees: 110, isRecordTemp: false }
];

temperatures.map(temperature => 
temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
).forEach(temperature => {
   if (temperature.isHigh) {
     console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
   }
})


temperatures.map(temperature => temperature.degrees >= 32  ? {...temperature, iscold: true } : temperature).forEach(temperature =>{
  if (temperature.iscold){
    console.log(`Temperature ${temperature.degrees} was tolerable last week last week!`);  
  }
})

temperatures.map(temperature => temperature.degrees < 32 ? {...temperature, isfreezing: true} : temperature).forEach(temperature => {
  if (temperature.isfreezing){
    console.log(`Temperature ${temperature.degrees} was freezing last week.,!`);
  }
})

temperatures.map( temperature => temperature.degrees >= 100 ? {...temperature, istoHot: true} : temperature).forEach(temperature =>{
  if (temperature.istoHot){console.log(`Temperature ${temperature.degrees} is to hot to be outside. Drink plenty of water.`)}
})