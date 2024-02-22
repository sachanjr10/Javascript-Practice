const PromiseOne = new Promise(function(resolve, reject){
    //we have to an async operation
    //DB call , cryptography, api calls
    //for example
    setTimeout(function(){
        console.log("Async operation completed");
        resolve();
        //here we get that then is connected to resolve method
    }, 1000)
})

PromiseOne.then(() => {
    console.log("Promise is consumed");
})


//now if we dont store in const
new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async 2 is completed");
        resolve()
    }, 2000)
})
.then(function(){
    console.log("Promise is consumed")
})


//passing argument in resolve that are eventually parameter for the then
const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Anjul", email: "anu@mail.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
})


//reject aur resolve dono dekhenge 
//then and catch chaining
const PromiseFour = new Promise((resolve, reject) => {
    //as always apna async operation
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username:"Vaish", email:"vaish@mail.com"})
        }
        else
        {
            reject("Error: Something went wrong!!!")
        }
    }, 1000)
})

//here the return statement sent by then is sent to then statement in the chaining
PromiseFour.then((user) => {
    console.log(user);
    return user.username;

})
.then((username) =>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})


//aur bhai suno try an catch aur then and catch mai kya antar hot hai ?
//try needs instruction like async and await but in the case of then jb tak phicla code nahi khtm hoga tb tak code nhi chalta


//using try and catch 
const PromiseFive = new Promise(function(res, rej){
    setTimeout(() => {
        let err=true
        if(!err)
        {
            res({username:"JS", password:"123"})
        }
        else
        {
            rej("Eroor: JS not Working!!!")
        }
    }, 1000);
})


async function consumePromiseFive(){
    try {
        const response = await PromiseFive //now its not taken as () method PromiseFive is asctually object
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()

//next part we will fetch so be tune


