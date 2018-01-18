var playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

		var winnerIs = 'player';

			if (playerPick == computerPick) {
				winnerIs = 'noone'; //draw
			} else if (
				(computerPick == 'rock' &&  playerPick == 'scissors') ||
		        (computerPick == 'scissors' &&  playerPick == 'paper') ||
		        (computerPick == 'paper' &&  playerPick == 'rock')) {

				winnerIs = 'computer';

			}

			console.log(winnerIs)

			if (winnerIs == 'player') {
				playerResultElem.innerHTML = 'win!';
				playerResultElem.className = 'label-success';
				player.score++;
				console.log('winner is ' + player.name);
			} else if (winnerIs == 'computer') {
				computerResultElem.innerHTML = 'win!';
				computerResultElem.className = 'label-success';
				computer.score++;
				console.log('winner is computer')
			}

			setGamePoints();
			checkGameWinner(player.score, computer.score);
}
