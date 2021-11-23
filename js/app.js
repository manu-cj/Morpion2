let h1 = document.getElementsByTagName("h1");
let section = document.getElementById("jeu");
let cases = document.getElementsByClassName("case");
let h2 = document.getElementsByTagName("h2");
let reset = document.getElementById("reset");
let joueur1 = [];
let joueur2 = [];
let winner = "";


let jeuActif = true


let jeu = true;
let victoire = 3;

function win() {
    for (let i = 0; i < 9; i++) {
        cases[i].style.backgroundColor = "none";
    }
    alert("Le joueur " + winner + " a gagné");
}

function egaliter() {
    for (let i = 0; i < 9; i++) {
        cases[i].style.backgroundColor = "none";
    }
    h2.innerHTML = "Egalité";
}





for (let i = 0; i < 9; i++) {
    cases[i].addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                cases[i].innerHTML = "X"
                joueur1.push(i)
                console.log(i)
                if (joueur1.includes(0)){
                    if (joueur1.includes(1)){
                        if (joueur1.includes(2)){
                            winner = "X";
                            win();
                        }
                    }
                }
                 if (joueur1.includes(0)){
                    if (joueur1.includes(3)){
                        if (joueur1.includes(6)){
                            winner = "X";
                            win()
                        }
                    }
                }
                if (joueur1.includes(3)){
                    if (joueur1.includes(4)){
                        if (joueur1.includes(5)){
                            winner = "X";
                            win();
                        }
                    }
                }
                if (joueur1.includes(6)){
                    if (joueur1.includes(7)){
                        if (joueur1.includes(8)){
                            winner = "X";
                            win();
                        }
                    }
                }if (joueur1.includes(1)){
                if (joueur1.includes(4)){
                    if (joueur1.includes(7)){
                        winner = "X";
                        win();
                    }
                }
            }
                if (joueur1.includes(2)){
                    if (joueur1.includes(5)){
                        if (joueur1.includes(8)){
                            winner = "X";
                            win();
                        }
                    }
                }

                    if (joueur1.includes(2)){
                        if (joueur1.includes(4)){
                           if (joueur1.includes(6)){
                               winner = "X";
                               win();
                           }
                        }
                    }
                if (joueur1.includes(0)){
                    if (joueur1.includes(4)){
                        if (joueur1.includes(8)){
                            winner = "X";
                            win();
                        }
                    }
                }

                break;


            case 2:
                cases[i].innerHTML = "O";
                joueur2.push(i)
                console.log(i)
                if (joueur2.includes(0)){
                    if (joueur2.includes(1)){
                        if (joueur2.includes(2)){
                            winner = "O";
                            win();
                        }
                    }
                }
                if (joueur2.includes(0)){
                    if (joueur2.includes(3)){
                        if (joueur2.includes(6)){
                            winner = "O";
                            win()
                        }
                    }
                }
                if (joueur2.includes(3)){
                    if (joueur2.includes(4)){
                        if (joueur2.includes(5)){
                            winner = "O";
                            win();
                        }
                    }
                }
                if (joueur2.includes(6)){
                    if (joueur2.includes(7)){
                        if (joueur2.includes(8)){
                            winner = "O";
                            win();
                        }
                    }
                }if (joueur2.includes(1)){
                if (joueur2.includes(4)){
                    if (joueur2.includes(7)){
                        winner = "O";
                        win();
                    }
                }
            }
                if (joueur2.includes(2)){
                    if (joueur2.includes(5)){
                        if (joueur2.includes(8)){
                            winner = "O";
                            win();
                        }
                    }
                }

                if (joueur2.includes(2)){
                    if (joueur2.includes(4)){
                        if (joueur2.includes(6)){
                            winner = "O";
                            win();
                        }
                    }
                }
                if (joueur2.includes(0)){
                    if (joueur2.includes(4)){
                        if (joueur2.includes(8)){
                            winner = "O";
                            win();
                        }
                    }
                }


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