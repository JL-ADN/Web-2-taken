// dit stukje code, gaat een popup tonen, van het type "prompt"
// die prompt gaat een vraag stellen en dan kan de gebruiker (dus diegene die website gebruikt)
// een woord ingeven (aka string)
var bodyColor = prompt("geef me kleur voor de body"); // we zetten woord gekregen van de gebruiker in de variabele color (zie beetje als lege doos)
// we gaan een nieuwe variabele declareren genoemd bodyElement
// en daarin gaan we het HTML-element steken met de naam body
var bodyElement = document.getElementsByTagName("body")[0];
// dit stuk code gaat van het body element, de style opvragen (bodyElement.style)
// vervolgens gaat dit de backgroundColor van het body element aanpassen
bodyElement.style.backgroundColor = bodyColor;