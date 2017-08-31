function World() {
  this.territories = [];
  this.selectedTerritories = [];
}

World.prototype.createTerritory = function(territoryName, units) {
  this.territories.push(new Territory(territoryName, units));
};

World.prototype.getTerritoryName = function(selectedTerritory) {
  if (this.selectedTerritories.length < 2) {
    this.selectedTerritories.push(selectedTerritory.attr('id'));
  } else {
    this.selectedTerritories = [];
    this.selectedTerritories.push(selectedTerritory.attr('id'));
  }

};

World.prototype.resolveCombat = function() {
  if (this.selectedTerritories.length == 2) {
    var attacker = this.selectedTerritories[0];
    var defender = this.selectedTerritories[1];
    var attackerIndex = this.indexFinder(attacker, this.territories);
    var defenderIndex = this.indexFinder(defender, this.territories);
    this.territories[defenderIndex].defend(dice, this.territories[attackerIndex]);
  }
};

World.prototype.indexFinder = function(name, array) {
  return array.map(function(element) {
    return element.name;
  }).indexOf(name);
};
