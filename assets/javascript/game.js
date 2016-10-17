
$(document).ready(function(){

// displays modal
  	$('#myModal').modal('show');


//Set up random number for user

	var random = Math.floor(Math.random()*101+19)
		console.log(random);
		$('#number').text(random)

// Set up variables

	var genNumbers = []
	var total = 0;
	var wins = 0;
	var losses = 0;
	$('#wins').text(wins);
	$('#losses').text(losses);

// Randomization for Pokemon

	function pokeNum(){
		for (var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*11+1);
			genNumbers.push(num);
		}
		console.log(genNumbers);
	}

	pokeNum();
	
//Resets the game after win or loss

	function reset(){
		random = Math.floor(Math.random()*101+19);
		console.log(random);
		$('#number').text(random);
		genNumbers = [];
		pokeNum ();
		total = 0;
		$('#score').text(total);
	}

//Adds wins
	function winner(){
		alert ("You win!");
		wins++;
		$('#wins').text(wins);
		reset();
	}

//Adds losses
	function loser(){
		alert ("You lost. Try again!");
		losses++;
		$('#losses').text(losses);
		reset();
	}

//Click Events

	//First Pokemon
	$('#glaceon').on ('click', function(){
		total = total + genNumbers[0];
		console.log("new total: " + total);
		$('#score').text(total);

		//win / lose conditionals
		
			if (total == random)	{
				winner();
			}
			else if (total > random) {
				loser();
			}
	})

	//Second Pokemon
	$('#jolteon').on ('click', function(){
		total = total + genNumbers[1];
		console.log("new total: " + total);
		$('#score').text(total);

		//win / lose conditionals
		
			if (total == random)	{
				winner();
			}
			else if (total > random) {
				loser();
			}
	})

	//Third Pokemon
		$('#leafeon').on ('click', function(){
		total = total + genNumbers[2];
		console.log("new total: " + total);
		$('#score').text(total);

		//win / lose conditionals
		
			if (total == random)	{
				winner();
			}
			else if (total > random) {
				loser();
			}
	})


	//Fourth Pokemon
		$('#umbreon').on('click', function(){
			total = total + genNumbers[3];
			console.log("new total: " + total);
			$('#score').text(total);

		//win / lose conditionals
		
			if (total == random)	{
				winner();
			}
			else if (total > random) {
				loser();
			}
		})

});