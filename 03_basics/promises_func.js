const ticket = new Promise(function (resolve, reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('You are in the flight');
    }else{
        reject("Your flight has been cancelled")
    }
});

ticket.then((data) =>{
    console.log("wohoo!!!,", data)
}).catch((data)=>{
    console.log("oh no", data);
}).finally(()=>{
    console.log("I will always be executed.")
})

// create a promise object, we use the Promise() contructor.
/*
exp-
let promise = new Promise(function(resolve, reject){
    // here is do something.
});
*/ 
// full-fill = then use resolve
//  not-fullfill = reject.

// A promise may have one of three states.
    // Pending, Fulfilled, Rejected 
    
 // promie - pending
        // resolve - .then(OnFullfillment) 
                    // reject   - .catch(OnRejection)