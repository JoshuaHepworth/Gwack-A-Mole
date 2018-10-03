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

class Fruit {
	constructor() {

		this.fruit = ['onion', 'avocado', 'tomato', 'lime'];
    	// choose a random slot # (1-6), set a property
    	// be sure to check first, if a fruit is already in that slot
    	// (check in game.fruits)
		
		// REMINDER
    	// ONLY PLAYER 1 FOR ONE
    	// IGNORE PLAYER 2
    	// DON'T DO PLAYER 2
    	// ONLY PLAYER 1










    	// let foundASlot = false

    	// while (!foundASlot) {

    		// randomly-choose a slot #

    		// find out if that randomly chosen slot slot is taken

    			// loop through game.fruits, (an array of Fruit objects, IOW, instances of the fruit class)

    				// game.fruits[i] is an object that has properties slot, and randomFruit
    				// see if game.fruits[i].slot is the same as the randomly generated number


    		// if its taken

    			// nothing

    		// else 

    			// we're done --- stop loop by making foundASlot True

		// } // end while(!foundASlot)









    	// add a chceck:  
    	// if any fruits in game.fruits are in this slot #
    	// get another slot #
		this.slot = (Math.floor(Math.random()*6) + 1);
		console.log(this.slot);





		// choose random fruit name from array, set a property
		this.randomFruit = this.fruit[Math.floor(Math.random() * this.fruit.length)];
		console.log(this.randomFruit);

    	// concat the approp selector using the randly gen'd vals
    	const selector = '#player1slot'+this.slot + ' ' + '.' + this.randomFruit
    	console.log(selector)


    	// put it on the screen jQuery
    	$(selector).show().velocity('transition.bounceIn', 2000)//.fadeOut()



    	// set a timer to destroy fruit
    		// (remove it from game.fruits) <--
    		// and hide with velocity



	}

	checkFruit() {
		if($.inArray(this.fruits, this.slot) !== -1) {
			console.log('is in array');
		} else {
			console.log('is Not in array')

		}

	}
}

const game = {
    timeout: 5,
    ready1: false,
    ready2: false,
    interval: 0,
    timer: 0,
    player1: null,
    player2: null,

    /// holds currently showing fruits
    /// make a Fruit class, and ahve an array for all fruits here?
    /// and also later maybe one for p2?
    fruits: [],

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
        $('#count-down').hide()

        this.interval = setInterval(() => {
            this.timer++;
            $('#count-down').hide()
            $('#timer').text('Time: ' + this.timer + 's');

            const fruit = new Fruit();

            this.fruits.push(fruit);

   //          // this.fruit.checkFruit()
   //          if($.inArray(this.fruits.randomFruit, game.fruit) !== -1) {
			// 	console.log('is in array');
			// } else {
			// 	console.log('is Not in array')
			
		// }

            if (this.timer === 60) {
                clearInterval(this.interval);
            }
        }, 1000)
    },
    show1Slot1() {
    	let $p1slot1 = $("#player1slot1 img");
	   	let $p1slot1random = $p1slot1.eq(Math.floor(Math.random()*$p1slot1.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
    },
    show1Slot2() {
    	let $p1slot2 = $("#player1slot2 img");
		let $p1slot2random = $p1slot2.eq(Math.floor(Math.random()*$p1slot2.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
	},
	show1Slot3() {
		let $p1slot3 = $("#player1slot3 img");
		let $p1slot3random = $p1slot3.eq(Math.floor(Math.random()*$p1slot3.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
	},
	show1Slot4() {
		let $p1slot4 = $("#player1slot4 img");
		let $p1slot4random = $p1slot4.eq(Math.floor(Math.random()*$p1slot4.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
	},
	show1Slot5() {
		let $p1slot5 = $("#player1slot5 img");
		let $p1slot5random = $p1slot5.eq(Math.floor(Math.random()*$p1slot5.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
	},
	show1Slot6() {
		let $p1slot6 = $("#player1slot6 img");
		let $p1slot6random = $p1slot6.eq(Math.floor(Math.random()*$p1slot6.length)).show().velocity('transition.bounceIn', 2000).fadeOut()
	}

}

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




