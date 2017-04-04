let spouse = document.querySelector("#spouse");
let job = document.querySelector("#job");
let loc = document.querySelector("#location");
let kids = document.querySelector("#kids");
let hobby = document.querySelector("#hobby");
let button = document.querySelector("#button");
let infos = document.querySelector("#infos");
let result = document.querySelector("#result");

button.addEventListener("click", showFortune);

function showFortune () {
    console.log(result);
    infos.style.display = "none";
    //result.innerHTML="test";
    result.innerHTML = "You will be married to " + spouse.value + " with " + kids.value + " kids, living in  " + loc.value + ". <br />You'll be working as " + job.value + " and your hobby will be " + hobby.value + ". <br />Press enter to get a new life! ";
}

window.onkeypress = function(event) {
    if (event.keyCode == 13){
        window.location.reload();
    }
}
