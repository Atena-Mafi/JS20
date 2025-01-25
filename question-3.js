/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/



// ! Answer
const article = document.querySelector("article");
article.classList.add("cards");
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"GET",
    headers:{

        "Content-Type":"application/json"
    },
})
.then(res=>res.json())
.then(data=>{

console.log(data)
data.forEach(ele => {
    const card=document.createElement("div");
    const line1=document.createElement("span");
    line1.textContent=`name:${ele.name}`;


    const line2=document.createElement("span");
    line2.textContent=`company name:${ele.company.name}`;


    card.append(line1,line2);
    article.append(card);
     card.classList.add("card");
    line1.classList.add("line1","info");
    line2.classList.add("line2","info");
    });
})
.catch(err=>console.log(err));



