// topic : for loop

// Definition
// For loop is a programming language conditional iterative statement which is used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.

// Syntax
// for(variable starting position , condition , increase the value){

//     Write your code
// }

//      Example (Using for loop)
// for(let i = 1;i<6;i++){
//      console.log("Hello World")
//  }
//    Without using for loop:
//  console.log("Hello World");
//  console.log("Hello World");
//  console.log("Hello World");
//  console.log("Hello World");
//  console.log("Hello World");

//          ---------------------------------xxx-------------------------------------

// TO implment any variable value inside any html code or any other workspace

// Koi bhi variable ka value dena hai to usko sabse pehle bano; bana na ka bad guys ap logo ko jahapar bhi wo variable dena hai oha par $ sign lagao phir {}brackets do or uske ander ap apna varable name ko likho bracket ka ander.
// Syntax : ${variable-Name}

//          --------------------------------xxx------------------------------------------

// Array


//      Definition
// An array is a collection of items of same data type stored at contiguous memory locations. 
// Array is elements are stored under []brackets.
// Image address = https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png

var number = 0;
var id = -1;

var clutter = "";
for (let i = 1; i <= 16; i++) {
  number = number + 1
  id = id +1
    clutter += `   <div class="video " >
         <div class="title">
             <p>Video ${number}</p>
         </div>

         <div class="ctrls"> 
             <i class="fa-solid fa-play" id = ${id}></i>
         </div>
     </div>
   
 
 </div>`
}

document.querySelector("#videoContainer").innerHTML = clutter



let videos = [
    'video/vid1.mp4',
    'video/vid2.mp4',
    'video/vid3.mp4',
]

document.querySelector("#videoContainer").addEventListener("click",function(dets){
    videoPlay = videos[dets.target.id]
    Specify = ` <video src=${videoPlay} controls ></video>`
    document.querySelector("#videoPlayer").innerHTML = Specify
})