'use strict'; // typ (us) en direct enter.
// typ (log) en direct enter.
console.log('Adrien oefening wekt');
//h1 selecteren en de background color veranderen.
let h1Element = document.querySelector('.h1');
console.log(h1Element);
h1Element.style.backgroundColor = 'red';

//UNDERLINE.
document.getElementById("Adrien").style.textDecoration = "underline"
document.getElementById("Achraf").style.textDecoration = "underline"
document.getElementById("George").style.textDecoration = "underline"

let klasseNaamVijfdeRij = 'vijfde-rij';
let studenten = document.getElementsByClassName(klasseNaamVijfdeRij)
console.log(studenten);

for (let element of studenten) {
    console.log(studenten);
    element.style.backgroundColor = 'pink';
}