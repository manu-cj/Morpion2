let h1 = document.getElementsByTagName("h1");
let section = document.getElementById("jeu");
let cases = document.getElementsByClassName("case");
let h2 = document.getElementsByTagName("h2");
let reset = document.getElementById("reset");
let joueur1 = []
let joueur2 = []
let winner = ""


let jeuActif = true


let jeu = true;
let victoire = 3;

function win() {
    for (let i = 0; i < 8; i++) {
        cases[i].style.backgroundColor = "none";
    }
    h2.innerHTML = "Le joueur" + winner + "a gagné";
}

function egaliter() {
    for (let i = 0; i < 8; i++) {
        cases[i].style.backgroundColor = "none";
    }
    h2.innerHTML = "Egalité";
}





for (let i = 0; i < 8; i++) {
    cases[i].addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                cases[i].innerHTML = "X"
                joueur1.push(i)
                console.log(i)

                return true;

            case 2:
                cases[i].innerHTML = "O";
                return true;

        }
    })
}


section.addEventListener("click", function () {

})


function verifLigne() {
    for (let i = 0; i < 8; i++) {

    }
}


document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});