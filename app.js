//  Answer No-01  //

// function print (def) {
//     return function (ghi) {
//         console.log(def + ghi)
//     }
// }

// let innerFunction = print(8);
// innerFunction(7);

//  Answer No-02  //

// function searchArray(arr, value) {
//   if (arr.length === 0) {
//       return false;
//   }
//   if (arr[0] === value) {
//       return true;
//   }
//   return searchArray(arr.slice(1), value);
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(searchArray(myArray, 9));
// searchArray(myArray, 1);


//  Answer No-03  //

// function addParagraphToDocument(text){
//   let newParagraph = document.createElement("p");
//   let textNode = document.createTextNode(text);
//   newParagraph.appendChild(textNode);
//   document.body.appendChild(newParagraph);
// }
// addParagraphToDocument("This is a new paragraph.");
// console.log();

//  Answer No-04  //

// function addListItem(text) {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.textContent = text;
//     ul.appendChild(li);
//   }

//   addListItem('New list item text');


//  Answer No-05  //

// function smit(){
// let work = document.getElementById("my-para");
// work.innerHTML="<h1>Hello SMIT</h1>";
// work.style.backgroundColor = "black";
// work.style.color = "white";
// }
// smit();

//  Answer No-06  //

// function provStd(){
//   let std = {
//               name: prompt("Enter Your Name :"),
//               rollno: +prompt("Enter Your Roll N0 :"),
//               className: prompt("Enter Your Class Name :"),
//               subject: prompt("Enter Your Subject Name :"),
//   };
//   students.push(std);
// let stringfiy = JSON.stringify(students);
// localStorage.setItem("students",stringfiy);
// }
// let previous = localStorage.getItem("students");
// let students = previous ?  JSON.parse(previous) : [];


//  Answer No-07  //

// function provStd(){
//     let std = {
//                 name: prompt("Enter Your Name :"),
//                 rollno: +prompt("Enter Your Roll N0 :"),
//                 className: prompt("Enter Your Class Name :"),
//                 subject: prompt("Enter Your Subject Name :"),
//     };
//     students.push(std);
//   console.log(students);
//   let stringfiy = JSON.stringify(students);
//   localStorage.setItem("students",stringfiy);
//   }
//   let previous = localStorage.getItem("students");
//   let students = previous ?  JSON.parse(previous) : [];

//  Answer No-08  //

// function saveObjectToLocalStorage(obj) {
//     Object.keys(obj).forEach(key => {
//         localStorage.setItem(key, JSON.stringify(obj[key]));
//     });

//     let newObj = {};
//     Object.keys(obj).forEach(key => {
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//     });
//     return newObj;
// }

// let myObj = { name: 'Ahmed', age: 18, class: 'Java script', Gender: 'Male'};
// let savedObj = saveObjectToLocalStorage(myObj);
// console.log(savedObj);