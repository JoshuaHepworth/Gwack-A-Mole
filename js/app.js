//players class
console.log('whack a mole')
class Player {
	constructor(name){
		this.name = name;
		this.totalPoints = 0;
		this.tomatoes = 0;
		this.onions = 0;
		this.avocados = 0;
		this.lime = 10;
		this.ready = false;
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
	// timeout: 5,
	// timerDown: 5,
	ready1: false,
	ready2: false,
	interval: 0,
	timer: 0,
	player1: null,
	player2: null,
	start() { 
		console.log("start")
		this.countDown();
		// this.startTimer();
	},
	readyUp() {
		if(this.ready1 === true && this.ready2 === true){
			// this.countDown()
			this.start();
		}
	},
	printStats() {
		$('#timer').text(this.timer)
		$('#tomatoes').text(this.player1.tomatoes)
		$('#tomatoes2').text(this.player2.tomatoes)
		$('#onions').text(this.player1.onions)
		$('#onions2').text(this.player2.onions)
		$('#avocados').text(this.player1.avocados)
		$('#avocados2').text(this.player2.avocados)
		$('#limes').text(this.player1.limes)
		$('#limes2').text(this.player2.limes)
		$('#total-points').text(this.player1.totalPoints)
		$('#total-points2').text(this.player2.totalPoints)
	},
	countDown() {
		let timeout = 4;
		let timerDown = setInterval(() => {
			timeout--;
			$('#count-down').text(timeout)
			if(timeout === 0) {
				$('#count-down').text('GUACAMOLE!')
				clearInterval(timerDown);
				this.startTimer()
			}
		}, 1000)
	},
	startTimer(){
		this.interval = setInterval(() => {
			this.timer++;
			$('#timer').text('Time: ' + this.timer + 's');
			if(this.timer === 60){
				clearInterval(this.interval);
			}
		}, 1000)
 	}
 }
$(".ready1").on("click", () => {
	const player1Name = $('#player1-name').val()
	game.player1 = new Player(player1Name)
	$('#player1-display').append(game.player1.name)
	$('#player1-name').hide()
	$(".ready1").hide()
	game.ready1 = true;
	game.readyUp()

});
$(".ready2").on("click", () => {
	const player2Name = $('#player2-name').val()
	game.player2 = new Player(player2Name)
	$('#player2-display').append(game.player2.name)
	$('#player2-name').hide()
	$(".ready2").hide()
	game.ready2 = true;
	game.readyUp()
}) 

//PLAYER 1 BUTTONS
$(document).on("keydown", (e) => {
    if (e.keyCode === 81) {
        console.log('Q')
    };
    if (e.keyCode === 87) {
        console.log('W')
    };
    if (e.keyCode === 69) {
        console.log('E')
    };
    if (e.keyCode == 65) {
        console.log('A')
    };
    if (e.keyCode == 83) {
        console.log('S')
    };
    if (e.keyCode == 68) {
        console.log('D')
    };
//PLAYER 2 BUTTONS
    if (e.keyCode == 73) {
        console.log('I')
    };
    if (e.keyCode == 79) {
        console.log('O')
    };
    if (e.keyCode == 80) {
        console.log('P')
    };
    if (e.keyCode == 75) {
        console.log('K')
    };
    if (e.keyCode == 76) {
        console.log('L')
    };
    if (e.keyCode == 186) {
        console.log(';')
	}
})
// player 1
// 81=q
// 87=w
// 69=e
// a 65
// s 83
// d 68



