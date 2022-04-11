// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
	let numStr = Array.from(String(num), ele => Math.pow(ele, 2)).join('')
	return Number(numStr)
}

console.log(squareDigits(3212), 9414);