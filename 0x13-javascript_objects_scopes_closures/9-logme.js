#!/usr/bin/node
/**
 * a function that prints the number of arguments already printed and
 * the new argument value
 */
let count = 0;

exports.logMe = function count (item) {
  console.log(`${count}: ${item}`);
  count += 1;
};
