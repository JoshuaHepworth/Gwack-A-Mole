//players class
//THINGS STILL TO FINISH

//Randomly pop up images at random times on random slots
//Be able to keypress on images that are showing
//when clicked apply score to related image
//whoever has most points
//if keypress is made without image displayed minus one to score
//show winner

console.log('whack a mole')
class Player {
    constructor(name) {
        this.name = name;
        this.totalPoints = 0;
        this.tomatoes = 0;
        this.onions = 0;
        this.avocados = 0;
        this.lime = 10;
        this.ready = false;
    }
    whack() {
        console.log('whack works');
    }
    win() {

    }
    lose() {

    }
}



const game = {
    timeout: 5,
    // imageInterval: 2000,
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
        if (this.ready1 === true && this.ready2 === true) {
            // this.countDown()
            this.start();
        }
    },
    // printStats() {
    // 	$('#timer').text(this.timer)
    // 	$('#tomato1').text(this.player1.tomatoes)
    // 	$('#tomato2').text(this.player2.tomatoes)
    // 	$('#onion1').text(this.player1.onions)
    // 	$('#onion2').text(this.player2.onions)
    // 	$('#avocado1').text(this.player1.avocados)
    // 	$('#avocado2').text(this.player2.avocados)
    // 	$('#lime1').text(this.player1.limes)
    // 	$('#lime2').text(this.player2.limes)
    // 	$('#total-points').text(this.player1.totalPoints)
    // 	$('#total-points2').text(this.player2.totalPoints)
    // },
    countDown() {
        let timeout = 4;
        let timerDown = setInterval(() => {
            timeout--;
            $('#count-down').text(timeout)
            if (timeout === 0) {
                $('#count-down').text('GUACAMOLE!')
                clearInterval(timerDown);
                this.startTimer()

            }
        }, 1000)
    },
    startTimer() {
        this.interval = setInterval(() => {
            this.timer++;
            $('#count-down').hide()
            $('#timer').text('Time: ' + this.timer + 's');
            // this.showRandomImages()
            // this.displayRandomImages();
            if(this.timer % 3 === 0) {
            	let $p1slot1 = $("#player1slot1 img");
	   			let $p1slot1random = $p1slot1.eq(Math.floor(Math.random()*$p1slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
            }
            if (this.timer === 60) {
                clearInterval(this.interval);
            }
            //if this.timer === Math.random? etc. show images
            // if (this.timer === 1) {
            //     this.showRandomImages()
            // }
        }, 1000)
    },
    showRandomImages() {
       //show random images in a random order at random times of the game.
       // setTimeout(this.timedSlotOne, 1000)
       // clearTimeout(this.timedSlotOne)
  //      let $p1slot1 = $("#player1slot1 img");
	 //   let $p1slot1random = $p1slot1.eq(Math.floor(Math.random()*$p1slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
		// 	setInterval(() => {
		// 	this.$p1slot1random;
		// 	if(this.timer === 60){
		// 		clearInterval(this.interval)
		// 	}
		// }, 5000)
    },

displayRandomImages() {
	// let imageInterval = 8000;
// 	let $p1slot1 = $("#player1slot1 img");
// 	let $p1slot1random = $p1slot1.eq(Math.floor(Math.random()*$p1slot1.length)).show().velocity('transition.bounceIn', 500).fadeOut()
// 	// setInterval(this.$p1slot1random, this.imageInterval);
// }
}
}

//PLAYER 1 RANDOMLY GENERATES IMAGES
// const $p1slot1 = $("#player1slot1 img");
// const $p1slot1random = $p1slot1.eq(Math.floor(Math.random()*$p1slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p1slot2 = $("#player1slot2 img");
const $p1slot2random = $p1slot2.eq(Math.floor(Math.random()*$p1slot2.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p1slot3 = $("#player1slot3 img");
const $p1slot3random = $p1slot3.eq(Math.floor(Math.random()*$p1slot3.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p1slot4 = $("#player1slot4 img");
const $p1slot4random = $p1slot4.eq(Math.floor(Math.random()*$p1slot4.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p1slot5 = $("#player1slot5 img");
const $p1slot5random = $p1slot5.eq(Math.floor(Math.random()*$p1slot5.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p1slot6 = $("#player1slot6 img");
const $p1slot6random = $p1slot6.eq(Math.floor(Math.random()*$p1slot6.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

//PLAYER 2 RANDOMLY GENERATES IMAGES

const $p2slot1 = $("#player2slot1 img");
const $p2slot1random = $p2slot1.eq(Math.floor(Math.random()*$p2slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p2slot2 = $("#player2slot2 img");
const $p2slot2random = $p2slot2.eq(Math.floor(Math.random()*$p2slot2.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p2slot3 = $("#player2slot3 img");
const $p2slot3random = $p2slot3.eq(Math.floor(Math.random()*$p2slot3.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p2slot4 = $("#player2slot4 img");
const $p2slot4random = $p2slot4.eq(Math.floor(Math.random()*$p2slot4.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p2slot5 = $("#player2slot5 img");
const $p2slot5random = $p2slot5.eq(Math.floor(Math.random()*$p2slot5.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

const $p2slot6 = $("#player2slot6 img");
const $p2slot6random = $p2slot6.eq(Math.floor(Math.random()*$p2slot6.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
// console.log($p2slot6random)
//--------------------------------------------2
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
$('#player1slot1 img').hide()
$('#player1slot2 img').hide()
$('#player1slot3 img').hide()
$('#player1slot4 img').hide()
$('#player1slot5 img').hide()
$('#player1slot6 img').hide()
//HIDDEN IMAGES IN SLOTS PLAYER 2
$('#player2slot1 img').hide()
$('#player2slot2 img').hide()
$('#player2slot3 img').hide()
$('#player2slot4 img').hide()
$('#player2slot5 img').hide()
$('#player2slot6 img').hide()
//PLAYER 1 BUTTONS


//if player1slot1 ingredient is hit, onion-pic1 ++
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




