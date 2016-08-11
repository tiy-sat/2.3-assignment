

// PART 0: Write a function called squareDance() that squares each number in an array.

// http://stackoverflow.com/questions/19645186/square-each-number-in-an-array-in-javascript

// Map uses a callback function
function squareDance(arr){
	return arr.map(function(number){
		return Math.pow(number, 2);
	});
}

// expanded line 10
function squareDance(arr){
	return arr.map(function(number){
		var squaredNumber =  Math.pow(number, 2);
		return squaredNumber;
	})
}
//using a for loop
function squareDance(arr){
	for (var i = 0; i < arr.length; i++){
		arr[i] = Math.pow(arr[i], 2);
	}
	console.log(arr);
	return arr;
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

function nicer(words){
	var wordsArray = words.split(" ");
	for (var i = 0; i < wordsArray.length; i++) {
		if(wordsArray[i] == "heck"){
			wordsArray.splice(i, 1);
		}else if(wordsArray[i] == "darn"){
			wordsArray.splice(i, 1);
		}else if(wordsArray[i] == "crappy"){
			wordsArray.splice(i, 1);
		}else if(wordsArray [i] == "dang"){
			wordsArray.splice(i, 1);
		}
	}
	return wordsArray.join(" ");
	console.log(wordString);
}

// var nonowords = ["darn", "heck", "crappy", "dang"];
//
// for (var i = 0; i < nonowords.length; i++) {
// 	switch(nonowords[i]){
// 		case "heck":
// 		nonowords.splice(i, 1);
// 		break;
// 	}
//
// }


console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.

// http://www.w3schools.com/jsref/jsref_charat.asp
// http://www.w3schools.com/jsref/jsref_substring.asp

// function capitalizeAll(str){
// 	// var arr = str.split (" ");
// 	// for (var i = 0; i < arr.length; i++) {
// 	// 	arr[i] = arr[i].charAt(0).toUppercase() + arr[i].substring(1);
// 	// }
// 	// return arr.join(" ");
// 	//Couldn't figure out why this wasn't working
// }


function capitalizeAll(str) {
	 words = str.split(" ");
	 for(var i = 0; i < words.length; i++) {
	    var letters = words[i].split("");
	    letters[0] = letters[0].toUpperCase();
	    words[i] = letters.join("");
	 }
	 return words.join(" ");
}


console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

// var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'
// function properSentences(paragraph){
// 	sentences = paragraph.split(". ");
// 	for (var i = 0; i < sentences.length; i++) {
// 		sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].substring(1);
// 	}
// 	console.log(sentences);
//
// }

// console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
var fun = "fun";
function iPutTheFunIn(str){
	var halves = str.split("e");
	for (var i = 0; i < halves.length; i++) {
		var insert = halves[i].splice(1, 0, fun);
		console.log(insert);
	}

}


console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
