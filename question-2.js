/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer


async function users() {

try{
const response=await fetch("https://jsonplaceholder.typicode.com/users")

if (!response.ok) {
    
throw new Error(`Sorry,${response.status},${response.statusText}`);
}

const data=await response.json();
console.log(data);

}
catch(err){

    console.log(err.message);
    
}
    
}

users()