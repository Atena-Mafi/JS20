//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

// way 1👇👇👇👇

const familyIds=[1,2,3];

async function deleting(ids){
    for (const ele of ids) {
        try{
            const response= await fetch(`https://67938abc5eae7e5c4d8f07a6.mockapi.io/users/${ele}`,{
                method:"DELETE",
                })
                
                if(!response.ok){
                    throw new Error(`Error ${response.status}`);
                }
               const data= await response.json();
               console.log(data);
        }
        
        catch(err){
            console.log(err.message);
            
        }
      
        
    }      


}


deleting(familyIds);

// way 2👇👇👇👇

 async function deleteFamily() {
     try{

             const response= await fetch("https://67938abc5eae7e5c4d8f07a6.mockapi.io/users",{

           method:"GET",

            headers:{
             "Content-Type":"application/json",
               }

                   })

if(!response.ok){
throw new Error(`Error${response.status}`)

}
const data=await response.json()
console.log(data);
const familyMember=data.filter(ele=> ele.firstName==="Grattan"||ele.firstName==="William"||ele.firstName==="Robert");


try{
for(member of familyMember){
const familyMemberIds=await fetch(`https://67938abc5eae7e5c4d8f07a6.mockapi.io/users/${member.id}`,{
    method:"DELETE",
})
if(!familyMemberIds.ok){

throw new Error(`Error${familyMemberIds.status}`)
}

const data2= await familyMemberIds.json()
console.log(data2);
}
}
catch(error){
    console.log(error.message);
}

}
catch(err){

    console.log(err.message); 
}
 }

   deleteFamily()

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


async function deletingEvenIds(){

    try{

        const response= await fetch("https://67938abc5eae7e5c4d8f07a6.mockapi.io/users",{

            method:"GET",
            
            headers:{
                "Content-Type":"application/json"
            },
            
        })
            if(!response.ok){

                throw new Error(`Error ${response.status}`)
            }
            
          const data= await response.json();
        
          console.log(data);
         const evenIds= data.map(ele=>ele.id).filter(id=>Number(id)%2===0);


         for(id of evenIds){
            try{
          const res= await fetch(`https://67938abc5eae7e5c4d8f07a6.mockapi.io/users/${id}`,{
                  method:"DELETE",
              })
              if(!res.ok){
      
                throw new Error(`Error ${res.status}`)
             }
              
             const deletedData=await res.json()
             console.log(deletedData)
    }

    catch(err){
        console.log(err.message);
        
       }

    } }
        catch(error){
            console.log(error.message);
            }
        }


deletingEvenIds();


// *End of story :)

