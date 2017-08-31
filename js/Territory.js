function Territory(name, units){
  this.name = name;
  this.units = units;
  this.initRender();
}

Territory.prototype.initRender = function () {
  // $('<div>').attr('class', 'territory').html(this.name +" "+ this.units).appendTo('body');
  var $territory = $('<div>').addClass('territory').attr('id', this.name);
  var $title = $('<h1>').html(this.name);
  var $units = $('<p>').html(this.units);
  $territory.append($title).append($units);
  $('body').append($territory);
};

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

Territory.prototype.defend = function(dice, enemy){
  console.log("Attacking units: "+enemy.units,"- Defending units: "+this.units);
  var nDices = this._defendDices();
  var defenseResult = this._rollResult(dice, nDices);
  var attackResult = enemy.attack(dice);
  var that = this;
  defenseResult.forEach(function(c,i){
    if (attackResult[i] > defenseResult[i]) {
      //Unidades de Defensa
      that.units -= 1;
      console.log(attackResult[i] +" - "+defenseResult[i]);
      console.log("Attacking units: "+enemy.units,"- Defending units: "+that.units);
    } else {
      //Unidades de Ataque
      enemy.units -= 1;
      console.log(attackResult[i] +" - "+defenseResult[i]);
      console.log("Attacking units: "+enemy.units,"- Defending units: "+that.units);
    }
  });
};
