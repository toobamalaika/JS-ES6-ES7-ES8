/**** ================================================================
                        * data types *
 =============================================================== ****/

// variable type can be change
var a = 10;
a= 20;
var a = 30;

// let can be change as given syntax
let b = 12;
b = 22;
// let b = 22;

// constant type , it doesn't change
const c = 14;
// c = 24;

console.log("variable: ",a);
console.log("let: ",b);
console.log("const: ",c);

/**** ================================================================
                        * if/else statment *
 =============================================================== ****/

let age = 20;
if (age == 20) {
    console.log("right age")
} else {
    console.log("wrong age")
}

// Check with datatype
let year = 2020;
if (year === "2020") {
    console.log("data type not matched")
} else if(year === 2020) {
    console.log("data type verified")
} else {
    console.log("wrong year")
}

/**** ================================================================
                        * loop *
 =============================================================== ****/

//  for loop
 for (let i = 0; i <= 10; i++) {
     console.log("for loop: ",i)
 }

//  while loop
let j = 0;
while (j <= 5) {
    console.log("while loop: ", j);
    j++;
}

// for of loop
let names = ["Rabeet","Uzain","Arham"];
for (let name of names) {
    console.log("of loop: ",name);
}

// foreach loop
names.forEach(data => {
    console.log("foreach loop: ",data);
});

/**** ================================================================
                        * functions *
 =============================================================== ****/

//  simple parameter function
 function getName(data) {
     console.log("function with parameter: ",data);
 }
 getName("Tooba Malaika");

 //  simple parameter function es6
 const getname = (data) => {
     console.log("ES6 function",data);
 }
 getname("Rabeet Malik");

 /**** ================================================================
                        * asynchronous callback *
 =============================================================== ****/

 let fruits = ["Banana", "Apple", "Orange", "Kiwi"];
 const getFruits = () => {
     setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
     }, 1000);
     
 }

// //  it doesn't execute , so here is need to asynchronous
//  const postFruit = (fruit) =>{
//      setTimeout(() =>{
//          fruits.push(fruit);
//      },2000);
//  }

// Use callback for invoke another function
 const postFruits = (fruit , callback) =>{
    setTimeout(() => {
        fruits.push(fruit);
        callback();
    },2000);
}
//  postFruit("Grapes");
 postFruits("Grapes", getFruits);
//  getFruits();


 /**** ================================================================
                        * asynchronous promises *
 =============================================================== ****/

 let animals = ["cat", "dog", "goat", "cow"];
 const getAnimals = () => {
     setTimeout(() => {
        animals.forEach(data => {
            console.log(data);
        });
     }, 1000);
     
 }

const postAnimals = (animal) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            animals.push(animal);
            let err = true;
            if(!err){
                resolve();
            }
            else{
                reject("Sometjing went wrong");
            }
        },2000); 
    });
}
postAnimals("duck")
.then(getAnimals).
catch(err => {
    console.log(err);
});


 /**** ================================================================
                        * async and await *
 =============================================================== ****/

 let vegs = ["carrot", "onion", "potato", "tomato"];
 const getVegs = () => {
     setTimeout(() => {
        vegs.forEach(data => {
            console.log(data);
        });
     }, 1000);
     
 }

const postVegs = (veg) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            vegs.push(veg);
            let err = false;
            if(!err){
                resolve();
            }
            else{
                reject("Sometjing went wrong");
            }
        },2000); 
    });
}

const init = async() => {
    try{
        await postVegs("Peas");
        getVegs();
    }catch(err){
        console.log(err);
    }  
};

init();

 /**** ================================================================
                        * modules and exporting *
 =============================================================== ****/

 const printModule = (value) => {
     console.log(value);
 }
 module.exports = printModule;