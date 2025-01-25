// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */
users.forEach(user=>{

    fetch("https://67938abc5eae7e5c4d8f07a6.mockapi.io/users",{

        method:"POST" ,
        headers:{
     
         "Content-Type":"application/json"
        },
        body: JSON.stringify(user),
     })
     .then(res=>{
       if(!res.ok){

        throw(` Error ${res.status}`)
       }
      return  res.json()

     })
    
     .then(data=>console.log(data))
     .catch(err=>console.log(err.message))
     


})
//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
const btn=document.querySelector(".btn");
const fName=document.querySelector("#fName");
const lastName=document.querySelector("#lName");
const phoneEl=document.querySelector("#phone-number");  

btn.addEventListener("click",(e)=>{
    e.preventDefault()
if(fName.value==="" || lastName.value===""|| phoneEl.value===""){
    alert("Please fill all of the blanks.")
    return

}

fetch("https://67938abc5eae7e5c4d8f07a6.mockapi.io/users",{

    method:"POST",
    
    headers:{
    
        "Content-Type":"application/json"
    },
    
    body:JSON.stringify({
    
        firstName:fName.value,
        lastName:lastName.value,
        phone:phoneEl.value,

    })
    
    })
    .then(res=>{

        if(!res.ok){

            throw(` Error ${res.status}`)
           }
          return  res.json()

    } )
    .then(data=>console.log(data))
    .catch(err=>console.log(err.message));

    fName.value="";
    lastName.value="";
    phoneEl.value="";


})

