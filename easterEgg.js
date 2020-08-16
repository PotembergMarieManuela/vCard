"use strict";

function konamiCallback()
{
    var reverse = document.querySelector("body");
    reverse.style.transform = "rotate(180deg)";
    reverse.style.filter = "invert(100%)";
    reverse.style.backgroundColor ="white";
}

var easterEgg = new Konami(konamiCallback);