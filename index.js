//document.getElementById("count-el").innerText = 5

// grab the count-el elemeent store it in a countEl variable

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment() {
//    count = count + 1
//    countEl.innerText = count
// }

// //1. create a function, save() which logs out the count when its called
//  function save() {
//    console.log(count)
//  }

//////
//string variable
/////

// let username = "irfan"
// let message = "you have three new notification"



/// create a variable messagetouser that contains the message we have logged
// let username = "irfan"
// let message = "you have three new notification"

// let messageToUser = message + " ," + username + "!"
// console.log(messageToUser)

/////
//create two variable name and greeting. the name variable should store eg "hi, my name is"

//create a third variable, mygreeting, that contatenates the two strings
// log mygreeting to the console

// let name = "irfan Quadri"
// let greeting = " Hi, My name is "
// let mygreeting = greeting + name

// console.log(mygreeting)

//console.log(4+5)// 9
//console.log( "2" + "4")// 24
//console.log("5" + 1) 51
//console.log(100 + "100") 100100


//grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// create two variable (name and greeting) that contains your name 
//and the greeting we want to render on the page
// let name = " irfan Quadri "
// let greeting = "welcome back"

// render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

// add an emoji to the end! 
// write YOUR CODE BELOW HERE
// HINT: count = count + 1
//  welcomeEl.innerText += " 46"


//  //////

// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// let count= 0
// function increment() {
//    count += 1
//    countEl.innerText = count
// }

// function save() {
//    let countstr = count + " - "
//    saveEl.innerText += countstr
// 

// let firstname = "irfan"
// let lastname = " Quadri "
// let fullname = firstname + lastname
// console.log(fullname)

// let name = "linda"
// let greeting = "Hi there"
// function greetlinda() {
//    console.log(greeting + "," + name + "!")
// }
// greetlinda()

///
//  let mypoints = 3
//  function add3points() {
//    mypoints += 4
//    console.log(mypoints)

//  }

//  function remove1point() {
//    mypoints -= 1
//    console.log(mypoints)
//  }
 
//  add3points()
//  add3points()
//  remove1point()
 ///
 ///////////

 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 
 let count= 0
 function increment() {
    count += 1
    countEl.textContent = count
 }
 
 function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
 }
 