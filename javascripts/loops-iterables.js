// PART 0: Write a function called squareDance() that squares each number in an array.

function squareDance(num) {
	for (var i = 0; i < num.length; i++) {
		num[i] = Math.pow(num[i],2);
	}
	return num;
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
        } else if(wordsArray[i] == "darn"){
            wordsArray.splice(i, 1);
        } else if(wordsArray[i] == "crappy"){
            wordsArray.splice(i, 1);
        } else if(wordsArray[i] == "dang"){
            wordsArray.splice(i, 1);
        }
    }
    return wordsArray.join(" ");
    console.log(wordString);
}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.
function capitalizeAll(stringValue) {
	var capitalizeWords = stringValue.split(" ");
	for (var i = 0; i < capitalizeWords.length; i++) {
		if (i !== capitalizeWords.length + 1) {
		capitalizeWords[i] = capitalizeWords[i].charAt(0).toUpperCase() + capitalizeWords[i].slice(1);
	}
}
capitalizeWords = capitalizeWords.join(" ");
return capitalizeWords;
}

console.log(capitalizeAll("i hate looping things sometimes 🙆"));
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

function properSentences(str) {
	var sentenceArray = str.split(". ");
	for (var i = 0; i < sentenceArray.length; i++) {
		if (i !== sentenceArray.length - 1) {
			sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1) + ". ";
		} else {
		sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1);
	}
}
sentenceArray = sentenceArray.join("");
return sentenceArray;
}

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
function iPutTheFunIn(string) {
	for (var i = 0; i < string.length; i++) {
		string[i]
	}
}


console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.
//  😖 what is pipeline?? everything i found on google was confusing
// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'
function pipeline(paragraph,nicer,properSentences) {
	var map = nicer.properSentences.map;
	var answer = map.call(nicer(properSentences(s)));
}
// not sure how to use map exactly
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
