/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
// Variable that holds all students name
const studentAlias = document.getElementsByClassName('student-item cf');
//Variable that allows only ten student to be shown on page
const numberOfStudents = Math.ceil(studentAlias.length/10);
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
newDiv.className = ("pagination");
//Appending newDiv and ul
page.appendChild(newDiv);
newDiv.appendChild(ul);
// loop for anchor tags
for (let i = 1; i <= numberOfStudents; i++){
  const li = document.createElement ("li");
  const a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a)
  // page number should be the same as anchor tags
  a.textContent = i;
  a.href = "#"
}
}
//Call pages function
pages();


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

 newDiv.addEventListener("click", (event) =>{
//Variable for anchor tags and page number
let numberOfPages = document.getElementsByTagName("a")
//if loop to activate anchor tags whenever clicked
if (event.target.tagName === "A"){
  //targets class name of active
  event.target.className ="active";
  numberOfPages = event.target.textContent;
  //shows the right amount of students and student names using listOfStudents function from earlier
  listOfStudents(numberOfPages, studentAlias);
}
  //Change active page when moved to another pages
  //Variable for active page
  const active = document.querySelector(".active")
  //for loop that runs through the active pages
  for (let i = 0; i < numberOfPages.length; i += 1){
    active.classList.remove("active");
  }

 });
