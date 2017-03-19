console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
  // inside, add each land as an article tag
  for(var i= 0; i < lands.length; i++) {
    var article = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    var h1 = document.createElement("h1");
    h1.innerHTML = lands[i];
    article.appendChild(h1);
     // append middle-earth to your document body
    middleEarth.appendChild(article);
    body.appendChild(middleEarth);
    console.log(middleEarth);
  }
}
makeMiddleEarth();

// Part 2
var theShire = document.querySelector("article");
var theHobbits = document.createElement('ul');
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  for(var i=0; i < hobbits.length; i++) {
    var hobbitName = document.createElement('li');
    // give each hobbit a class of hobbit
    theHobbits.className = "hobbits";
    hobbitName.innerHTML = hobbits[i];
    theHobbits.appendChild(hobbitName);
    console.log(theHobbits);
  }
  
  theShire.appendChild(theHobbits);
}
makeHobbits();

// Part 3
var ring = document.createElement("div");
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var audioElement = document.createElement('audio');
  ring.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click", nazgulScreech);
  console.log(ring);
  // add the ring as a child of Frodo
  var theRing = document.querySelector("li");
  theRing.appendChild(ring);
}
keepItSecretKeepItSafe();

// Part 4

var rivendellList = document.querySelectorAll("article")[1];
var buddiesList = document.createElement('ul');
function makeBuddies() {
  // create an aside tag
  var asideBuddies = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  for(var i=0; i < buddies.length; i++) {
    var buddiesItem = document.createElement('li');
    buddiesList.className = "buddies";
    buddiesItem.innerHTML = buddies[i];
    buddiesList.appendChild(buddiesItem);

    console.log(buddiesList);
  }
  // insert your aside as a child element of rivendell
  
  rivendellList.appendChild(buddiesList);
}
makeBuddies();
// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var aragorn = document.querySelectorAll('li')[7];
aragorn.textContent = "Aragorn";

}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var assembleHobbits = document.querySelector(".hobbits");
  rivendellList.appendChild(assembleHobbits);
}
leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowhsip";
  rivendellList.appendChild(theFellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var hobbits = document.querySelector(".hobbits");
  var buddies = document.querySelector(".buddies");
  theFellowship.appendChild(buddies);
  theFellowship.appendChild(hobbits);
  var forge = theFellowship.querySelectorAll('li');
  for(var i=0; i < forge.length; i++) {
    alert(forge[i].innerText + " " + "has joined the party");
  }
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandolf = document.querySelectorAll('li')[0];
   // apply style to the element
  gandolf.textContent = "Gandolf the White";
  // make the background 'white', add a grey border
  gandolf.style.backgroundColor = "white";
  gandolf.style.border = "3px solid grey";

}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  var boromir = document.querySelectorAll('li')[4];
  // put a linethrough on boromir's name
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  boromir.remove();
}
hornOfGondor();

// Part 10
var mordor = document.querySelectorAll("article")[2];
var mountDoom = document.createElement("div");
var frodo = document.querySelectorAll("li")[4];
var sam = document.querySelectorAll("li")[5];
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor

  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom.id = "mount-doom";
  mordor.appendChild(mountDoom);

}
itsDangerousToGoAlone();

// Part 11
var gollum = document.createElement("div");
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum.id = "gollum";
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  gollum.remove();
  // remove all the baddies from the document
  buddiesList.remove();
  // Move all the hobbits back to the shire
  theHobbits.appendChild(frodo);
  theHobbits.appendChild(sam);
  theShire.appendChild(theHobbits);
}
thereAndBackAgain();
