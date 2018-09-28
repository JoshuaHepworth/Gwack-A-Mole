//players class

class Player {
	constructor(name){
		this.totalPoints = 0;
		this.tomatoes = 0;
		this.onions = 0;
		this.avocados = 0;
		this.lime = 10;
	}
	whack(){
		console.log('whack works');
	}
	win(){

	}
	lose(){

	}
}

const game = {
	interval: null,
	runTime: 0,
	player1: null,
	player2: null,
	start() {
		const player1Name = $('#player1-name').val()
		const player2Name = $('#player2-name').val()
		this.player1 = new Player(player1Name)
		this.player2 = new Player(player2Name)
		$('#player1-display').append(this.player1.name)
		$('#player1-name').hide()
		$('#player2-display').append(this.player2.name)
		$('#player2-name').hide()
		this.startTimer();
	}
}
