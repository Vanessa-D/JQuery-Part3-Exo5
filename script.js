$(function(){
    $("input").focus(function(){
        $(this).css("border", "2px solid seagreen");
    });

    $("input").blur(function(){
        $(this).css("border", "2px solid brown");
    });
});



// en JS vanilla, on aurait :
/*
let lastname = document.getElementById("lastname");
let firstname = document.getElementById("firstname");
let button = document.getElementById("okayButton");

lastname.addEventListener("blur", () => {
    lastname.style.border = "2px solid brown"
});
lastname.addEventListener("focus", () => {
    lastname.style.border = "2px solid seagreen"
});

firstname.addEventListener("blur", () => {
    firstname.style.border = "2px solid brown"
});
firstname.addEventListener("focus", () => {
    firstname.style.border = "2px solid seagreen"
});
*/