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