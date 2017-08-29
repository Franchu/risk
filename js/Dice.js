function Dice(faces){
  this.faces = faces;
}

Dice.prototype.roll = function () {
  return Math.floor(Math.random() * this.faces) + 1;
};
