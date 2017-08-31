var dice = new Dice(6);
var world = new World();

$(document).ready(function() {
  world.createTerritory('mordor', 6);
  world.createTerritory('rohan', 3);
  world.createTerritory('shire', 2);
  world.createTerritory('gondor', 5);
  world.createTerritory('rivendel', 3);

  $('.territory').on('click', function() {
    world.getTerritoryName($(this));
    world.resolveCombat();
    console.log(world.selectedTerritories);
  });
});
