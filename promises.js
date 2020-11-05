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