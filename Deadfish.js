/*
Create a parser to interpret and execute the Deadfish language.
Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:
  i: Increment the value
  d: Decrement the value
  s: Square the value
  o: Output the value to a result array

All other instructions are no-ops and have no effect.

Examples:
  Program "iiisdoso" should return numbers [8, 64].
  Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/


// Solution

function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}