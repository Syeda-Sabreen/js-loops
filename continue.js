let name = "Impossible";
let counter = 0;
let myLetter;
while(counter <=3){

    myLetter=name[counter];
    console.log(myLetter);
    if(counter === 1){
    counter++;
    continue;
}
if(myLetter === "p") break;
counter++;
}
console.log(counter);
