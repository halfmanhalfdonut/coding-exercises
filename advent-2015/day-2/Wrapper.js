class Wrapper {
  constructor(boxes) {
    this.boxes = boxes.split('\n');
  }

  getTotalPaper() {
    return this.boxes.reduce((memo, box) => {
      let [ length, width, height ] = box.split('x');

      let sides = [
        2 * length * width,
        2 * width * height,
        2 * height * length
      ];

      let smallest = Math.min(...sides) / 2;

      return memo += sides.reduce((acc, side) => acc += side, 0) + smallest;
    }, 0);
  }

  getRibbon() {
    return this.boxes.reduce((memo, box) => {
      let [ length, width, height ] = box.split('x');

      let volume = length * width * height;

      let perimeters = [
        (2 * length) + (2 * width),
        (2 * width) + (2 * height),
        (2 * height) + (2 * length)
      ];

      let smallest = Math.min(...perimeters);

      return memo += smallest + volume;
    }, 0);
  }
}

module.exports = Wrapper;