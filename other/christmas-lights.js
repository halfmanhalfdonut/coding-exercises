/*

Christmas Lights!

It's Christmas and you know what that means, time to put up the Christmas lights! We have a massive chain of lights that need to be connected in the right order: [1, 3, 2, 5, 9, 4, 7, 8, 6] where each number represents a connection. The first chain is connected to the power outlet and is shining brightly! As each chain also connects to the power source it shines, but when we connect 3 before 2 obviously that light chain will not shine until 2 is connected, then 1, 2, and 3 will be connected to the power source and will shine.

So:
Moment 0: 1 is shining = 1
Moment 1: 3 is connected but only 1 is shining = 2 
Moment 2: 2 is connected so 1, 2, and 3 are shining = 5
etc.

CHALLENGE

We need to know what our power bill is after connecting all the lights! Write a function that adds up the amount of time each string of lights is shining to get one total sum of power usage.

*/

console.log('----- Starting Bill Calculation -----');

const connections = [1, 3, 2, 5, 9, 4, 7, 8, 6];
let lastPowered = 0;
let previousCount = 0;

connections.reduce((memo, connection) => {
  if (connection - 1 === lastPowered) {
    let index = connections.indexOf(connection);
    let powered = connections.slice(0, index + 1);
    let count = powered.length;
    previousCount = count;
    lastPowered = Math.max(...powered);

    return memo + count;
  } else {
    return memo + previousCount;
  }
}, 0);