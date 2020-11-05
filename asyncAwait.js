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