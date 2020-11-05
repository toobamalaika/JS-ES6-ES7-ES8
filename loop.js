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