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
	},
	printStats() {
		$('#tomatoes').text(this.player1.tomatoes)
		$('#tomatoes').text(this.player2.tomatoes)
		$('#onions').text(this.player1.onions)
		$('#onions').text(this.player2.onions)
		$('#avocados').text(this.player1.avocados)
		$('#avocados').text(this.player2.avocados)
		$('#limes').text(this.player1.limes)
		$('#limes').text(this.player2.limes)
		$('#total-points').text(this.player1.totalPoints)
		$('#total-points').text(this.player2.totalPoints
	}
}
