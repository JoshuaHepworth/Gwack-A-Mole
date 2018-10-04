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
    lose() {s

    }
}

class Fruit {
	constructor(player) {
        this.player = player
        // this.player = player
		const fruit = ['onion', 'avocado', 'tomato', 'lime'];
        // const fruit2 = ['onion', 'avocado', 'tomato', 'lime'];

    	// choose a random slot # (1-6), set a property
    	// be sure to check first, if a fruit is already in that slot
    	// (check in game.fruits)
		this.slot = null;
        // this.slot2 = null;

    	let foundASlot = false
		while(foundASlot === false) {

			// randomly-choose a slot #
			this.slot = (Math.floor(Math.random()*6) + 1);
            // this.slot2 = (Math.floor(Math.random()*6) + 1);
			

			// find out if that randomly chosen slot is taken:
			
			let itsTaken = false;
			// loop through game.fruits, (an array of Fruit objects, IOW, instances of the fruit class)
            for (let i = 0; i < game.fruits.length; i++) {
				// game.fruits[i] is an object that has properties slot, and randomFruit
				// see if game.fruits[i].slot is the same as the randomly generated number
				if(game.fruits[i].slot === this.slot) { 
					itsTaken = true;
				}
			}  
			
			// if its taken
			if(itsTaken){
				// nothing
			} else {
				// we're done --- stop loop by making foundASlot True
				foundASlot = true;
			}

		 } // end while(!foundASlot)

		// choose random fruit name from array, set a property
		this.randomFruit = fruit[Math.floor(Math.random() * fruit.length)];
        // this.randomFruit2 = fruit2[Math.floor(Math.random() * fruit2.length)];


    	// concat the approp selector using the randly gen'd vals
    	const selector = '#player'+ this.player + 'slot' + this.slot + ' ' + '.' + this.randomFruit
        // const selector2 = '#player2slot' + this.slot2 + ' ' + '.' + this.randomFruit2

    	// put it on the screen jQuery
    	$(selector).show().velocity('transition.bounceIn', 200)
        // $(selector2).show().velocity('transition.bounceIn', 200)

    	// set a setTimeout to destroy fruit
        setTimeout(() => {

    		// (remove it from game.fruits) <--
    		game.fruits.splice(-1,1)
            game.fruits2.splice(-1,1)
            // game.fruits2.splice(-1,1)

    		// and hide //with velocity
    		$(selector).hide().velocity('transition.bounceOut', 200)
            // $(selector2).hide().velocity('transition.bounceOut', 200)
    		
    	}, 400)




	} // end constructor() 




	// checkFruit() {
	// 	if($.inArray(this.fruits, this.slot) !== -1) {
	// 		console.log('is in array');
	// 	} else {
	// 		console.log('is Not in array')

	// 	}

	// }
}
const game = {
    // timeout: 5,
    ready1: false,
    ready2: false,
    interval: 0,
    timer: 0,
    player1: null,
    player2: null,
    score: 0,
    score2: 0,
    fruits: [],
    fruits2: [],

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
    countDown() {
        let timeout = 4;
        let timerDown = setInterval(() => {
            timeout--;
            $('#count-down').text(timeout)
            if (timeout === 0) {
                $('#count-down').text('GUACAMOLE!')
                clearInterval(timerDown);
                this.startTimer()
                // this.fruit.randomHole()

            }
        }, 1000)
    },
    startTimerOld() {
        this.interval = setInterval(() => {
            this.timer++;
            $('#count-down').hide()
            $('#timer').text('Time: ' + this.timer + 's');
            // this.showRandomImages()
            // this.displayRandomImages();
            if(this.timer % 3 === 0) {
            	this.show1Slot1()
            	this.show1Slot3()
            	this.show1Slot5()
            }
            if(this.timer % 4 === 0) {
            	this.show1Slot2()
            	this.show1Slot6()
            }
            if(this.timer % 5 === 0) {
            	this.show1Slot4()
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
    startTimer() {

        this.interval = setInterval(() => {
            this.timer++;
            $('#count-down').hide()
            $('#timer').text('Time: ' + this.timer + 's');

            const fruit = new Fruit(1);
            const fruit2 = new Fruit(2);
            this.fruits2.push(fruit2)
            this.fruits.push(fruit);
            console.log(this.fruits)
            // console.log(this.fruits2)

            if (this.timer === 10) {
                $('#timer').text('TIMES UP!!!');
                if(this.score < this.score2) {
                    $('.winner').text('PLAYER 2 WINS')
                } if(this.score > this.score2) {
                    $('.winner').text('PLAYER 1 WINS')
                } if(this.score === this.score2) {
                    $('.winner').text('TIE GAME')
                }
                clearInterval(this.interval);
            }
        }, 1000);
    },
    player1Buttons(num) {
        // console.log(this.fruits[0].slot + " this is the number I am comparing my params to!")
        // console.log(num, "<--comparing it to this")      
        if (this.fruits[0].slot === num) {
            this.score++;
            $('#total-points1').text('Score: ' + this.score);

            console.log("-------------Huzzahhh !!!!")
            // console.log(this.score)
      
        }

        // console.log(this.fruits[0])
        // console.log(this.fruits[0].slot + 'this is the slot')
    },
    player2Buttons(num) {
        // console.log(this.fruits[0].slot + " this is the number I am comparing my params to!")
        // console.log(num, "<--comparing it to this")      
        if (this.fruits2[0].slot === num) {
            this.score2++;
            $('#total-points2').text('Score: ' + this.score2);

            console.log("-------------Huzzahhh !!!!")
            // console.log(this.score)
      
        }

        // console.log(this.fruits[0])
        // console.log(this.fruits[0].slot + 'this is the slot')
    }

// }//Game Close

//PLAYER 2 RANDOMLY GENERATES IMAGES
}
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
// const player1Buttons = (num) => {
//     if (game.fruits.slot === num) {
//         score++
//     console.log("Huzzahhh mf!!!!")


//     }

// }

//THE KEY CODE THAT IS BEING HIT FIRST IS THE ONLY ONE ACCUMULATING POINTS
$(document).on("keydown", (e) => { 

    if (e.keyCode === 81) {
        // console.log('Q');
        game.player1Buttons(1)

        //if image is there while key is pressed
        //score ++
    };
    if (e.keyCode === 87) {
        // console.log('W')
        game.player1Buttons(2)

    };
    if (e.keyCode === 69) {
        console.log('E')
        game.player1Buttons(3)
    };
    if (e.keyCode == 65) {
        console.log('A')
        game.player1Buttons(4)
    };
    if (e.keyCode == 83) {
        console.log('S')
        game.player1Buttons(5)
    };
    if (e.keyCode == 68) {
        console.log('D')
        game.player1Buttons(6)
    };
    //PLAYER 2 BUTTONS
    if (e.keyCode == 73) {
        console.log('I')
        game.player2Buttons(1)
    };
    if (e.keyCode == 79) {
        console.log('O')
        game.player2Buttons(2)
    };
    if (e.keyCode == 80) {
        console.log('P')
        game.player2Buttons(3)
    };
    if (e.keyCode == 75) {
        console.log('K')
        game.player2Buttons(4)
    };
    if (e.keyCode == 76) {
        console.log('L')
        game.player2Buttons(5)
    };
    if (e.keyCode == 186) {
        console.log(';')
        game.player2Buttons(6)
    }
})
// game.ready1 = true;
// game.ready2 = true;
// game.readyUp();

// const $p2slot1 = $("#player2slot1 img");
// const $p2slot1random = $p2slot1.eq(Math.floor(Math.random()*$p2slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

// const $p2slot2 = $("#player2slot2 img");
// const $p2slot2random = $p2slot2.eq(Math.floor(Math.random()*$p2slot2.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

// const $p2slot3 = $("#player2slot3 img");
// const $p2slot3random = $p2slot3.eq(Math.floor(Math.random()*$p2slot3.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

// const $p2slot4 = $("#player2slot4 img");
// const $p2slot4random = $p2slot4.eq(Math.floor(Math.random()*$p2slot4.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

// const $p2slot5 = $("#player2slot5 img");
// const $p2slot5random = $p2slot5.eq(Math.floor(Math.random()*$p2slot5.length)).show().velocity('transition.bounceIn', 2000).fadeOut()

// const $p2slot6 = $("#player2slot6 img");
// const $p2slot6random = $p2slot6.eq(Math.floor(Math.random()*$p2slot6.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
// console.log($p2slot6random)
