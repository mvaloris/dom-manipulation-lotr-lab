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
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var list = document.createElement('ul');
  for(var i=0; i < hobbits.length; i++) {
    var item = document.createElement('li');
    // give each hobbit a class of hobbit
    list.className = "hobbits";
    item.innerHTML = hobbits[i];
    list.appendChild(item);
    console.log(list);
  }
  var theShire = document.querySelector("article");
  theShire.appendChild(list);
}
makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
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
function makeBuddies() {
  // create an aside tag
  var asideBuddies = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement('ul');
  for(var i=0; i < buddies.length; i++) {
    var buddiesItem = document.createElement('li');
    buddiesList.id = "buddies";
    buddiesItem.innerHTML = buddies[i];
    buddiesList.appendChild(buddiesItem);

    console.log(buddiesList);
  }
  // insert your aside as a child element of rivendell
  var rivendellList = document.querySelectorAll("article")[1];
  rivendellList.appendChild(buddiesList);
}
makeBuddies();
// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
document.querySelectorAll("ul#buddies")[3].textContent = "Aragorn";

}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var assembleHobbits = document.querySelectorAll("ul.hobbits");
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
