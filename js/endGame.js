function endGame() {
	gameState = 'ended'
	setGameElements();
	playerPickElem.innerHTML = '';
	computerPickElem.innerHTML = '';
	playerResultElem.innerHTML = '';
	computerResultElem.innerHTML = '';
}
function checkGameWinner(playerPoints, computerPoints) {
	if (playerPoints == 10) {
		alert('CONGRATULATIONS!! ' + player.name + ' won the game!!');
		endGame();
	} else if (computerPoints == 10) {
		alert('“Kid, you tried your best and you failed miserably. The lesson is, never try.” by Homer Simson');
		endGame();
	}
}