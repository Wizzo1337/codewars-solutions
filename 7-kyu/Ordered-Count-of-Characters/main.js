// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  letters = text.split("")
  var uniqs = letters.filter((ele, index) => letters.indexOf(ele) == index)

  return uniqs.map((ele) => [ele, text.split(ele).length - 1])
}

console.log(orderedCount("abracadabra"), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
