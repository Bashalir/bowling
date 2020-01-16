var assert = require("chai").assert;
var Bowling = require("../src/bowling");

describe("Bowling", function() {
  it("should be a object", function() {
    const bowling = new Bowling();
    assert.isObject(bowling);
  });

  it("should have a first frame", function() {
    const bowling = new Bowling();
    bowling.roll(3);
    bowling.roll(2);
    assert.deepEqual(bowling.frameList, [[3, 2]]);
  });

  it("should have a Two first frame in a frame List", function() {
    const bowling = new Bowling();
    bowling.roll(1);
    bowling.roll(2);
    bowling.roll(3);
    bowling.roll(4);
    assert.deepEqual(bowling.frameList, [
      [1, 2],
      [3, 4]
    ]);
  });

  it("should have the score for all shoots in 2 frames with no bonus", function() {
    const bowling = new Bowling();
    bowling.roll(1);
    bowling.roll(2);
    bowling.roll(3);
    bowling.roll(4);
    assert.equal(bowling.score(), 10);
  });

  it("should have finish my frame if i make a strike", function() {
    const bowling = new Bowling();
    bowling.roll(10);
    assert.deepEqual(bowling.frameList, [[10, 0]]);
  });

  it("should have 20 score if i make a strike and after a frame with 5 score", function() {
    const bowling = new Bowling();
    bowling.roll(10);
    bowling.roll(3);
    bowling.roll(2);
    assert.equal(bowling.score(), 20);
  });

  it("should have 18 score if i make a spare and after a frame with 5 score", function() {
    const bowling = new Bowling();
    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(3);
    bowling.roll(2);
    assert.equal(bowling.score(), 18);
  });
});
