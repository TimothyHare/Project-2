/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
// Variable that holds all students name
const studentAlias = document.getElementsByClassName('student-item cf');
//Variable that allows only ten student to be shown on page
const numberOfStudents = math.ceil (studentAlias.length/10);
// Variables that recognize page length
const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");
// Variables to create Pagination
const newDiv = document.createElement("div");
const a = document.createElement("a");

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

//A function with a parameter of page and students
const listOfStudents = (page, studentAlias) => {

// A loop that will show ten students
for(let i =0; i< studentAlias.length; i+=1) {

//if else statement to show or hide students
if (i >= ((page *10) -10) && i < ((page * 10))){
  studentAlias[i].style.display ="block";
}else {
  studentAlias[i].style.display ="none";
  }
 }
}

// calling function of students
listOfStudents (1, studentAlias);




// Create and append the pagination links - Creating a function that can do this is a good approach
const pages = () => {
  //Variable that creates element ul
  const ul = document.createElement("ul");
//Class of newDiv adds page  numbers
newDiv.className = ("pages");
//Appending newDiv and ul
page.appendChild(newDiv);
newDiv.appendChild("ul");
// loop for anchor tags
for (let i = 1; i <= numberOfStudents; i++){
  const li = document.createElement ("li");
  const a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a)
  // page number should be the same as anchor tags
  a.textContent = "i";
  a.href = "#"
}
}
//Call pages function
pages();


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
