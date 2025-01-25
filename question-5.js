//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

fetch("https://67938abc5eae7e5c4d8f07a6.mockapi.io/users/1",{

method:"PUT",
headers:{

    "Content-Type":"application/json"
},

body:JSON.stringify({
    firstName:"Lufy",
    lastName:"monkey. D" ,
    phone:"(945)635-3854",
})

})

.then(res=>{
    if(!res.ok){

        throw(`Error,${res.status}`)
    }
    return res.json();
})
.then(data=>console.log(data))
.catch(err=>console.log(err));

//*To be continue...