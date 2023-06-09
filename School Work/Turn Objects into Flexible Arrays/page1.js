
// Object.entries give you the array of arrays. It is splitting up the arrays and giving them back to you.

const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };


  const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
    if(user.age > 20){
        acc.push({...user, id})
    }
    return acc;
  } , [])
