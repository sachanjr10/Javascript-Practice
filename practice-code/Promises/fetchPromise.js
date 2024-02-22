//it sjust the continuation of the Promise 
//it is the application of promise

//try catch 
// async function consumePromise(){
//     try {
//         const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() //** this also takes time so await
//         console.log(data);
        
//     } catch (error) {

//         console.log(error);
        
//     }

// }

// consumePromise()

//using then and catch block
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response);
    // console.log(response.json)
    return response.json()
})
.then((data) => {
    console.log(data);
    //this the return of the above catch i.e response.json
})
.catch((error) => {
    console.log(error);
})
{

}