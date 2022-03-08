
var voetballer1 = { name: "Messi", age: "34", club: "psg" };
var voetballer2 = { name: "Putellas", age: "27", club: "fcbarcelona" };
var voetballer3 = { name: "Cantona", age: "55", club: "manchester" };
var lijstvoetballer = [voetballer1, voetballer2, voetballer3]
for (let voetballer of lijstvoetballer) 
{ console.log("lijstvoetballer"); }



const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}
