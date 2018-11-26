document.querySelectorAll(".dice p")[0].style.display = "none";
document.querySelectorAll(".dice p")[1].style.display = "none";

document.querySelector(".btn").onclick = function(){
    
    document.querySelectorAll(".dice p")[0].style.display = "initial";
    document.querySelectorAll(".dice p")[1].style.display = "initial";
    
    var player1 = Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;

    function win(player1, player2) {
        if (player1 > player2) {
            document.querySelector("h1").textContent = "Player1 Wins";
            document.querySelector(".dice .img1").setAttribute("src", "images/dice" + player1 + ".png");
            document.querySelector(".dice .img2").setAttribute("src", "images/dice" + player2 + ".png");
        }
        if (player1 < player2) {
            document.querySelector("h1").textContent = "Player2 Wins";
            document.querySelector(".dice .img1").setAttribute("src", "images/dice" + player1 + ".png");
            document.querySelector(".dice .img2").setAttribute("src", "images/dice" + player2 + ".png");
        }
        if (player1 == player2) {
            document.querySelector("h1").textContent = "Draw";
            document.querySelector(".dice .img1").setAttribute("src", "images/dice" + player1 + ".png");
            document.querySelector(".dice .img2").setAttribute("src", "images/dice" + player1 + ".png");
        }
    }

    win(player1, player2);
}

    
