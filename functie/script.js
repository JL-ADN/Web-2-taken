let voetballer1 = { name: "Messi", age: "34", club: "psg" };
let voetballer2 = { name: "Putellas", age: "27", club: "fcbarcelona" };
let voetballer3 = { name: "Cantona", age: "55", club: "manchester" };

let lijstVoetballer = [voetballer1, voetballer2, voetballer3]

// voorbeeld van een loop
// for (let i = 0; i < 5; i++) {console.log(i);}

// print hier aantal elementen uit in je array
console.log(lijstVoetballer.length);

for (let i = 0; i < lijstVoetballer.length; i++) {
    console.log(lijstVoetballer[i]);
}
