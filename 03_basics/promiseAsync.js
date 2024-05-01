function getCheese(){
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            const cheese = '🧀';
            console.log("Here is cheese found",cheese);
            resolve(cheese);
        }, 2000);
    })   
}


function makeDough(cheese){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dough = cheese + '🫓';
            console.log('Here is cheese + dough', dough)
            resolve(dough);
            // reject('bad cheese');
        }, 2000);
    })
}

function bakePizza(dough){
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            const pizza = dough + '🍕';
            console.log('Found pizza here', pizza);
            resolve(pizza);
        }, 2000);
    })
}



// this is synch nature.
async function orderPizza(){
    try{
        const cheeze = await getCheese();
        console.log("Got cheese", cheeze);

        const dough =  await makeDough(cheeze);
        console.log("Got Dough", dough);

        const pizza = await bakePizza(dough);
        console.log("Got Pizza finally", pizza);
    }catch(err){
        console.log("Error Occured", err);
    }
}

orderPizza();

// these promise done by promise resolve and reject.
/*
getCheese().then( (cheese)=>{
    console.log("got the cheeze", cheese );
    return makeDough(cheese);
}).then( (dough) =>{
    console.log("Here is the dough", dough);
    return bakePizza(dough);
}).then( (pizza) =>{
    console.log("Here is the pizaa", pizza);
}).catch( (data)=>{
    console.log("Here is error",data);
})
*/