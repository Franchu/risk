function Territory(name, units){
  this.name = name;
  this.units = units;
}

Territory.prototype.attack = function(){
  if(this.units > 2) {
    return [throwDice(), throwDice(), throwDice()]; //choseMax()
  } else if (this.units === 2) {
    return [throwDice(), throwDice()]; //ordenarTirada()
  } else {
    return "You cannot attack with just 1 army!";
  }
};

Territory.prototype.defend = function(damage){
  if (this.units > 1) {
    return [throwDice(), throwDice()];
  } else {
    return [throwDice()];
  }
};

Territory.prototype.battleResult = function(){
  //Restar dados y quitar armies del atacante o defensor, según corresponda
};


function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function attackChose() {
  Aqui tienes que recoger las tres lanzadas y ordenarlas por orden ascendente.
  Eliminas la de menor valor.
  Devuelves un array con 2 elementos.
  //throwDice() x3
  //[throwDice(), throwDice(), throwDice()]; --> Ordenar, elimar la ultima posición y devuelves.
}

function defenseChose() {
  Aqui tienes ordenar los dos resultados de jugador que defiende.
  // [throwDice(), throwDice()] --> Ordenas y devuelves.

}
