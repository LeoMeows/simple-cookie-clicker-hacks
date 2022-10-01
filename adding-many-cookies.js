function AddDaCookies() {
  Game.playCookieClickSound();
  Game.cookies += 100000000000000000
};
let AreYouSure = prompt('Do you want to ruin the fun...?  Type: "I do." to continue.');
if (AreYouSure === "I do.") { 
  setInterval(AddDaCookies, 1); alert("Adding one hundred quadrillion cookies every 1 millisecond. Enjoy.")
} else{
  alert("You typed it wrong or canceled: make sure that it's capitalized with a period at the end!") 
}

