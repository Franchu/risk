var dice = new Dice(6);
var world = new World();

$(document).ready(function() {
  world.createTerritory('mordor', 10);
  world.createTerritory('rohan', 10);
  world.createTerritory('shire', 10);
  world.createTerritory('gondor', 10);
  world.createTerritory('rivendel', 10);

  $('.territory').on('click', function() {
    world.getTerritoryName($(this));
    world.resolveCombat();
  });
});
