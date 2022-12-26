// function WelcomeGuest (name){
//     console.log ('Hi ${name}Welcome to our hotel')
// }
// function resgisterinHotel (name,callback) {
//     console.log(name);
//     callback(name);
// }

// resgisterinHotel("logan",()=>{
//     WelcomeGuest("logan");
// })


// function WelcomeGuest(name, callback){
//     console.log(`hi ${name} welcome to our hotel`);
// callback(name);
// }

// function OrdersFromGuest(name, callback){
//     console.log(`my orders are`);
// callback(name);
// }

// function dispatch(name, callback){
//     console.log(`your orders are dispatched ${name}`);
// callback(name);
// }

// function greeting(){
//     console.log("Thank you");
// }
// function resgisterinHotel(name, callback){
//     console.log(`hi ${name} your registerd success`);
// callback(name);
// }

// resgisterinHotel("logan",(name)=>{
//     WelcomeGuest(name,(name)=>{
//         OrdersFromGuest(name,(name)=>{
//             dispatch(name,()=>{
//                 greeting();
//             })
//     })
// })
// })

function productdetails(name1, callback){
    console.log(` ${name1} is the Pick up product`);
callback(name1);
}

function numberofproduct(name2, callback){
    console.log(` ${name2} products`);
callback(name2);
}

function dispatch(name3, callback){
    console.log(` your orders are dispatched ${name3}`);
callback(name3);
}

function deliverymade(){
    console.log(" Delivery Completed");
}
function deliverymade1(name3){
    console.log(` ${name3} Number of products deliverd`);
}
function personregister(name, callback){
    console.log(` ${name} Registration is completed`);
callback(name);
}

personregister("LOGAN",(name1)=>{
    productdetails("Soap",(name2)=>{
        numberofproduct("2",(name3)=>{
            dispatch("YES",()=>{
                deliverymade();
                deliverymade1((name3));
            })
    })
})
})