// Perimeter sequence

// The first three stages of a sequence are shown.

// blocks

// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

function perimeterSequence(a,n) {
  return a * (n*4)
}

console.log(perimeterSequence(1,3), 12);
console.log(perimeterSequence(1,2), 8);
console.log(perimeterSequence(1,1), 4);
