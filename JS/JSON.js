// Javascript Object notation = JSON
const user = {id: 13, name: 'Aamir Khan', job: 'Actor'};
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);
const shop = {
    name: 'Alia vat Store ',
    address: 'Kapoor road',
    profit: 15000,
    products: ['laptop','mobile','pepsi'],
    owner: {
        name: 'Mahesh Vatt',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringified  = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);// parse korle full object ta pabo
console.log(converted);
// js akta normal or complex stringified dile iita ke normal string er moto kore pete caile JSON.parse() use korle normla string e rmoto kore dibe
// api server theke data load kore user ke dekhai 

// API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

//What Is an Example of an API? When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. ... That's where the waiter or API comes in. The waiter is the messenger – or API – that takes your request or order and tells the kitchen – the system – what to do.