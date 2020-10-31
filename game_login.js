function addUser()
{
    player1_username = document.getElementById("player1_id_input").value;
    player2_username = document.getElementById("player2_id_input").value;
    localStorage.setItem("Player 1 Username", player1_username);
    localStorage.setItem("Player 2 Username", player2_username);

    window.location = "game_page.html";
}
