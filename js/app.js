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
		$('#tomato1').text(this.player1.tomatoes)
		$('#tomato2').text(this.player2.tomatoes)
		$('#onion1').text(this.player1.onions)
		$('#onion2').text(this.player2.onions)
		$('#avocado1').text(this.player1.avocados)
		$('#avocado2').text(this.player2.avocados)
		$('#lime1').text(this.player1.limes)
		$('#lime2').text(this.player2.limes)
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
			$('#count-down').hide()
			$('#timer').text('Time: ' + this.timer + 's');
			if(this.timer === 60){
				clearInterval(this.interval);
			}
			if(this.timer === 2) {
				$('#player1slot1').velocity('transition.whirlIn', 2000)
			}
		}, 1000)
 	},
 	showImages() {
 		$('#player1slot1').velocity('transition.whirlIn', 2000)
 		$('#player1slot1').fadeOut()
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
//APPENDING ALL PICTURES TO SLOTS
//HIDDEN IMAGES IN SLOTS PLAYER 1
$('#player1slot1').hide()
$('#player1slot2').hide()
$('#player1slot3').hide()
$('#player1slot4').hide()
$('#player1slot5').hide()
$('#player1slot6').hide()
//HIDDEN IMAGES IN SLOTS PLAYER 2
$('#player2slot1').hide()
$('#player2slot2').hide()
$('#player2slot3').hide()
$('#player2slot4').hide()
$('#player2slot5').hide()
$('#player2slot6').hide()
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




