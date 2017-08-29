function Territory(name, units){
  this.name = name;
  this.units = units;
}

Territory.prototype.attack = function(){
  if(this.units > 2) {
    return attackChoose(); //Lanza 3 dados y devuelve los 2 resultados mayores
  } else if (this.units === 2) {
    return defenseChoose(); //Como en este caso sólo lanzamos 2 dados, usamos la misma función que para defender
  } else {
    return "You cannot attack with just 1 unit!";
  }
};

Territory.prototype.defend = function(){
  if (this.units > 1) {
    return defenseChoose();
  } else {
    return [throwDice()];
  }
};

Territory.prototype.receiveDamage = function () {
  this.units -= 1;
};

Territory.prototype.battleResult = function(){
  if (this.attack > this.defend){

  }
  //Restar dados y quitar units del atacante o defensor, según corresponda
};

// HASTA AQUÍ EL CONSTRUCTOR DE TERRITORIOS //

// AQUÍ EMPIEZO A CONSTRUIR TERRITORIOS //
function Mordor (name, units) {
  this.name = name;
  Territory.call(this, name, units);
}

Mordor.prototype = Object.create(Territory.prototype);
Mordor.prototype.constructor = Mordor;












// A PARTIR DE AQUÍ FUNCIONES AUXILIARES //

function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function attackChoose() {
  var tiradas = [throwDice(), throwDice(), throwDice()];
  tiradas.sort(function(a, b){
    return b - a;
  });
  tiradas.pop();
  return tiradas;
}

function defenseChoose() {
  var tiradas = [throwDice(), throwDice()];
  tiradas.sort(function(a, b){
    return b - a;
  });
  return tiradas;
}
