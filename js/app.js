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
	timer: 0,
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
	startTimer(){
		this.interval = setInterval(() => {
			// this.printStats();
			this.timer++;
			if(this.timer === 100){
				clearInterval(interval);
			}
				$('#timer').text('Time: ' + this.timer + 's');
		}, 1000)
 	}
 }
// console.log(game.startTimer())


console.log(game.startTimer())




// const setTimer = () => {
//     const interval = setInterval(()=>{
//         time++;
//     if(time === 60){
//         clearInterval(interval);

//      }
//          $('#timer').text('Timer ' + time + 's');
//     }, 1000)

// };
// console.log(setTimer())