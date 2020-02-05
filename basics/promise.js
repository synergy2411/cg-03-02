// Producer Code
let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("First Package");
    }, 3000);
})

// Consumer Code

promise.then(
    response=> {console.log(response)}, 
    err => console.log(err)
    )