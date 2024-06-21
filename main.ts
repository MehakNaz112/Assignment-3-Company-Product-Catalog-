//ARRAY ASSIGNMENT 3 (COMPANY PRODUCT CATALOG)
//QUESTION NUMBER 1
//Define an array named inventory to store product information.
let inventory: product[] =[]
type product = {
    name:string,
    model:number,
    cost:number,
    color:string,
};
//QUESTION NUMBER 2
//Create three seperate objects,each representing a product,with properties like name,model,cost,and quantity.
let product1 = {
    name:"Philips LED bulb",
    model:6,
    color:"Warm White",
    cost:500,
};
let product2 ={
    name:"Xiaomi LED Bulb",
    model:6,
    color:"Cool Daylight",
    cost:600,
};
let product3 = {
    name:"Osram LED Bulb",
    model:60,
    color:"Daylight",
    cost:450,
};
//QUESTION NUMBER 3
//Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1,product2,product3);
//QUESTION NUMBER 4
//Access and log the quantity property of a specific product (e.g third product) in the inventory array.
console.log(inventory);
console.log(inventory[2].model);
//QUESTION NUMBER 5
//Explore adding and accessing more elements within the inventory array to understand how to manage product data.
console.log(inventory[1].name);
console.log(inventory[0].model);


        

    
