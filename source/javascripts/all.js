//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}