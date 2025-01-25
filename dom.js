//console.log(window);
//console.log(document);


// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element)

// let ele = document.getElementById("test");
//ele.innerText= "<h1>Header<h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);
//!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="hello"
//ele[0].style.backgroundColor="tomato";

//!SpreadOperator:- It will takeout each and every value from the original array
//! and store it inside one more new array(pure array).
//?Syntax:- [...variable];
// let x = [...ele];
//console.log(x , Array.isArray(x));
// x.map(element=>{
    //console.log(element);
//     element.style.backgroundColor="orange"
// })
//let ele = document.getElementByName("formData");
// console.log(ele, Array.isArray(ele));
//[...ele].map(inp.value);
//})

//!
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

//let btn = document.querySelector("#btn");
//! addEventListener("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     console.log("Button Clicked");
    //     alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

// let btn = document.querySelector("#btn");
// btn.addEventListener("dblcli",()=>{
//     console.log("double clicked");
// })

// let divBlock = document.getElementById("divBlock");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow"
//     divBlock.style.backgroundColor="blue"
// })

// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="orange"
//     divBlock.style.backgroundColor="aqua"
// })

// let inp = document.getElementById("inp");
// inp.addEventListener("keydown",()=>{
//     console.log("keydown");
// })


// let bgColor = document.querySelectorAll(".bgColor");
     //console.log(bgColor);
// [...bgColor].map((element)=>{
         //console.log(element);
//     element.addEventListener("mouseover",()=>{
         //console.log(element.innerText);
//         element.computedStyleMap.backgroundColor=element.innerText;

//     });

// })

// let ele = document.createElement("hi");
// ele.innerText = "Dynamic creation of HTML element";
// ele.setAttribute("id" , "demo");
// ele.id = "demo";
//ele.removeAttribute("id")
//console.log(ele);

// let image = document.createElement("img");
// image.src = "./";
// console.log(image);
// document.body.appendChild(ele);
// document.body.appendChild(image);


let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    let uname = username.value;
    let uemail = mail.value;
    let upass = psw.value;
    let userDetails={
        uname , uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData", JSON.stringify(userDetails))
})

