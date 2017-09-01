function World() {
  this.territories = [];
  this.selectedTerritories = [];
  this.scoreBox = $('<div>').addClass('score').appendTo($('body'));
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
    var attackerIndex = this.indexFinder(this.selectedTerritories[0]);
    var defenderIndex = this.indexFinder(this.selectedTerritories[1]);
    this.attacker = this.territories[attackerIndex];
    this.defender = this.territories[defenderIndex];
    this.defender.defend(dice, this.attacker);
   this._updatePoints();
  }
};

World.prototype.indexFinder = function(name) {
  return this.territories.map(function(element) {
    return element.name;
  }).indexOf(name);
};

World.prototype._updatePoints = function() {
  $('#' + this.attacker.name + '>p').html(this.attacker.units);
  $('#' + this.defender.name + '>p').html(this.defender.units);
};
