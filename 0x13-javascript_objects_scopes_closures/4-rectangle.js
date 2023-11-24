#!/usr/bin/node
/**
 *  an instance method called rotate()
 *  that exchanges the width and the height of the rectangle
 *  Create an instance method called double()
 *  that multiples the width and the height of the rectangle by 2
 */
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let myVar = '';
      let j = 0;
      while (j < this.width) {
        myVar += 'X';
        j++;
      }

      console.log(myVar);
    }
  }

  rotate () {
    let temp = 0;
    temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
