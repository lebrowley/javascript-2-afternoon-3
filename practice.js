/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

function first(arr, cb) {
  cb(arr[0])
}

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

function last(arr, cb) {
  cb(arr[arr.length - 1])
}

// Do not edit the code below.
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.



////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

function multiply(num1, num2, cb) {
  cb(num1 * num2)
}

// Do not edit the code below.
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});
// Do not edit the code above.



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/


function contains(arr, name, cb) {
  for(let i=0; i <= arr.length - 1; i++){
    if(arr[i] === name){
      cb(true)
    }
  }  cb(false)
}


// Do not edit the code below.
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

// let uniqArr= []



function uniq(arr, cb) {
  let uniqArr= []
  arr.forEach(element => {
    if (!uniqArr.includes(element)) {
      uniqArr.push(element)
    }
  })
  cb(uniqArr)
}

// function uniq(arr, cb){
//   for(let i=0; i < arr.length; i++){
//     for(let j= arr.length; j > i; j--){
//       if(arr[i] === arr[j]){
//         var uniqArr= arr.splice(j, 1)
//       }
//     }
//   } 
//   return cb(uniqArr)
// }


// //function uniq(arr, cb) {
//   let uniqArr= []
//   arr.filter() ???
// }
// could you use this property?

//two for loops but make sure they don't overlap; one towards top array and one towards bottom array
// this one needs to first go through each index of the array iteratively; then, at each new index location, it needs to check this index against all other indeces to see if they match. if they do, it needs to spit the value at that index out to my new variable uniqArr which will then become a new array made up of all the items that used to be duplicates in the old one

// function uniq(arr, cb) {
//   for(let i=0; i <= arr.length - 1; i++){
//     if(arr[i] === arr[i + 1] || arr[i] === arr[i + 2] ||  (and on and on until all the indeces in the array have been checked against the current index from the for loop) arr[i] === arr[i + arr.length - 1]){
//       uniqArr.push(arr[i])
//     }
//   } return cb(uniqArr)
// }

// Do not edit the code below.
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
// Do not edit the code above.



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/


function each(arr, cb){
  arr.forEach(function(element, index, array){
    cb(element, index)
  })
}



// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.



////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/


function getUserById(user, id, cb){
  user.forEach(function(element, index, array){
    if(user.id === id){
      cb(user[index])
    }
  })
}


// user and id need to equal the same index number in the array users and if they do, then the cb can be invoked with the user argument

// if user[i] = id[i] then cb(user)... but not the value at index i the NUMBER OF INDEX I-- they have to be at the same index to be equal to each other

// what is indexOf? if(indexOf(user) === indexOf(id)){cb(user)}... would something like this work?

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
// Do not edit the code above.