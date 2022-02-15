// Alert gaat de pop up tonen - laten verschijnen met een bericht.
// Het bericht hier zal 12 + 13 zijn.
// Som = variable.
let getal1 = prompt("geef het eerste getal"); // Gaat een vraag stellen aan een de gebruiker voor de eerste getal.
let getal2 = prompt(" geef de tweede getal"); // Gaat een vraag stellen aan een de gebruiker voor de tweede getal.
let som = (getal1*1) + (getal2*1);
alert(som)
//let som = (getal1 * 1) + (getal2 * 1); // De som van de getallen.
// Getal1 en getal2 zijn stings geworden dus plaats je een *1.
// Alert(som);

// Getal1 en getal2 vergelijken.

let isGetal1KleinerDanGetal2 = getal1 < getal2

if (isGetal1KleinerDanGetal2) {
    alert('getal1 is groter dan getal2'); //Dit voeren we uit indien juist
}
else {
    alert('getal1 is kleiner dan getal2'); // Dit voeren we uit indien fout
}