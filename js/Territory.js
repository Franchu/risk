function Territory(name, units){
  this.name = name;
  this.units = units;
}

Territory.prototype.canAttack = function () {
  return this.units > 1;
};

Territory.prototype._attackDices = function(){
  return this.units > 3 ? 3 : this.units-1;
};

Territory.prototype._defendDices = function () {
  return this.units > 1 ? 2 : 1;
};

Territory.prototype._rollResult = function(dice, nDices) {
  var result = [];
  for (var i = 0; i < nDices; i++) {
    result.push(dice.roll());
  }
  return result.sort(function(a, b){
    return b - a;
  });
};

Territory.prototype.attack = function(dice) {
  var nDices = this._attackDices();
  return this._rollResult(dice, nDices);
};

Territory.prototype.defend = function(dice, damage){
  var nDices = this._defendDices();
  var defenseResult = this._rollResult(dice, nDices);
};
