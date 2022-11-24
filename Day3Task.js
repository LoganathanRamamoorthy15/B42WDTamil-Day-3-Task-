// Day-3 (Task)
// Question 1= For the given JSON iterate all for loops (for,for in,for Of,for Each)

// For loops

// var numbers = [ 10, 20, 30, 40, 50] 
// for (var i=0; i < numbers.length; i++) {
//    console.log(numbers[i])
// }
// Output:
// 10
// 20
// 30
// 40
// 50

// For in loop

// var person = {
//     fname: "Nick",
//     lname: "Jonas",
//     age: 26
//  }; 
//  for (let x in person) {
//     console.log(x + ": "+ person[x])
//  }
// Output:
// fname: Nick
// lname: Jonas
// age: 26

//  For of loop

//  let s=["a","b","c","d","e","f","g"]
//  for (let x of s) {
//      console.log(x)
//   }
// Output:
// a 
// b
// c
// d
// e
// f
// g



// Question 2= Create your own resume data in JSON Format.

// var resume = {
//     "Name": "Loganathan",
//     "Age": 28,
//     "Gender": "Male",
//     "Birthday": "15-12-1994",
//     "Education_Details": ["BSc", "MCA"],
//     "Location": "Chennai",
//     "Experience": "6 Year Experience in Java industry",
//     "Languages_known": ["English", "Tamil"],
//     "Hobbies": "Playing Games",

// }
// console.log(resume);

// Output
// { Name: 'Loganathan', Age: 28, Gender: 'Male', Birthday: '15-12-1994', Education_Details: Array(2), … }
// Age:28
// Birthday:"15-12-1994"
// Education_Details:(2)['BSc', 'MCA']
// Experience:"6 Year Experience in Java industry"
// Gender:"Male"
// Hobbies:"Playing Games"
// Languages_known:(2)['English', 'Tamil']
// Location:"Chennai"
// Name:"Loganathan"
// [[Prototype]]:
// Object