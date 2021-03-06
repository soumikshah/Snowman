var file = require('readlines');
var array = file.readlinesSync('countrylist.txt');
var imgArray = file.readlinesSync('snowmanpic.txt'); 
var colors = require('colors');
var readline = require('readline');

console.log(colors.rainbow("\n\t\tWelcome to Snowman Game\n"));
console.log(colors.blue("*******------Game Instructions------*******"));
console.log("\nNumber of Chances: 5\n");
console.log("Your Guess Word Category is : COUNTRY NAMES\n");
console.log(colors.blue("********---------------------------********\n"));

var wrongallowed = 5;
var wrongused = 0;
var result = [];
var display = [];
var dpic = wrongallowed;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});	

function init() {
	wrongused = 0;
	result = [];
	display = [];
	start();
}

function start() {
	for(option in array)
	{
		option = Math.floor(Math.random()*array.length);
		result = array[option];
		var length = result.length;
		var success = length;
		display=[length];
		
		for (var i=0;i<result.length;i++)
		{
			display[i]="_";
		}
	};
	console.log(display);
	console.log("\nThe Word has "+ length +" characters\n");
	//console.log("Hint | Guess which country's flag is this ?");
	acceptInut();
}

function acceptInut() {
	rl.question("Enter your guess character\n", function(answer) {
		testInput(answer);
	});
}

function testInput(input) {
	var matchfound = false;
	for (var i=0;i<result.length;i++)
			{
				if(input.toUpperCase() == result[i].toUpperCase())
				{
					matchfound=true;
					display[i] = result[i].toUpperCase();
				}
			}
			
			console.log(display);

			if(matchfound == false){
				dpic--;
				DrawSnowman(5-dpic);
				console.log(colors.red("WRONG GUESS | You have chance "+dpic+" left.\n"));
				wrongused++;
			}
			

			if(display.equals(result)) {
				console.log(colors.green("You Win! You guessed " +displayWord(result)+" correctly"));
				//rl.close();
				playagain();
			}
			else {
				if( wrongused < wrongallowed ) {
					acceptInut();
				}
				else {
					console.log("Game over! Sorry you loose. Correct Word was "+displayWord(result));
					//rl.close();
					playagain()
				}
			}
			
}

function displayWord(arrWord) {
	var str = "";
	for(var i=0; i < arrWord.length; i++ ) {
		str+=arrWord[i];
	}
	return str;
}


function playagain(){
	rl.question("\nPlay Again? Y/N \n", function(answer) {
		if(answer == "Y" || answer == "y") {
			console.log(colors.magenta("\nWelcome Back, It seems you NJOY playing this Game!"));
			console.log(colors.magenta("\nYou have new word to Guess this time, All the best!"));
			init();
		}
		else {
			end();
		}
	});
}

function end() {
	console.log(colors.magenta("\nThank you for playing with us , Hope to see you again!"));
	//r1.close();
	process.exit(0);
}

Array.prototype.equals = function (array) {
    // if the other array is a false value, return
    if (!array)
        return false;

    // compare lengths
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) {
            return false;   
        }           
    }       
    return true;
}  

module.exports.run = function(){
	init();
}

function DrawSnowman(input)
{
	var mul = input*4;
	for(i=0;i<mul;i++){
			var display=imgArray[i];
			console.log(display);
	}
}

