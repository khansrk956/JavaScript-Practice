function getCheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}
// 2-min bad jo bhi kam hoga 2 sec me lakar dega.
function makeDough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + '🍩';
        console.log("Here is the dough", dough);
        callback(dough);
    }, 2000);
}

// make pizza after getting dow.
function bakePizza(dough, callback){
    setTimeout(() => {
        const pizza = dough + '🍕';
        console.log("here is the pizaa", pizza);
        callback(pizza);
    }, 2000);
}


getCheese( (chee) =>{
    makeDough(chee, (dough) =>{
        bakePizza(dough, (pizza) =>{
            console.log("got my pizza", pizza);
        })
       
    })
})

// pizza -> dough -> cheese
// call-back-hell - done by - promise()
