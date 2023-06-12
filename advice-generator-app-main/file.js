const dice = document.getElementById("generate-btn");
const id = document.getElementById("advice-id");
const advice = document.getElementById("advice-text");

function loadQuote() {
    fetch("https://api.adviceslip.com/advice").then((response) =>{
        return response.json();
    }).then((response) => {
        id.innerHTML = `${response.slip.id}`;
        advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

dice.addEventListener("click",loadQuote)