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


// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     let uname = username.value;
//     let uemail = mail.value;
//     let upass = psw.value;
//     let userDetails={
//         uname , uemail, upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))
// })

// let vd = document.createElement("video");
// //console.log(video);
// vd.setAttribute("src" ,"./video.mp4")
// console.log(vd);
// document.body.append(vd);


// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class","topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src = "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/a8bf1a2c-259e-4e95-b2c2-bb995876ed63/a252bcd6-9a10-40be-bf99-1d850d2026e4.png";
// image.style.width="550px"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");


// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// h1.style.textAlign= "center";

// let btn = document.createElement("button");
// btn.innerText="View more";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass"); // Make sure 'id' matches the corrected HTML
let check=document.getElementById("check");
let show=document.getElementById("show");
let gender = document.getElementsByName("gender");


// Add submit event listener to the form
check.addEventListener("click",event=>{
    if(event.target.checked==true){
        password.setAttribute("type", "text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type", "password");
        show.innerText="show password";
    }
})
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    let un = username.value;
    let up = password.value;
    let gen = "";

    // Loop through gender radio buttons to find the selected one
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
        }
    }

    // Create a user details object
    let userDetails = {
        username: un,
        password: up,
        gender: gen,
    };

    // Log user details to the console
    console.log(userDetails);

    // Store user details in sessionStorage
    sessionStorage.setItem("userData", JSON.stringify(userDetails));
});
