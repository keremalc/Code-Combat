# Level Nummer: 7 - First Out

![Screenshot of the level](welt5-level7.png)

```js
// <%= goal %>

var units = hero.findFriends();
// <%= sergeant %>
var sergeant = hero.findByType("paladin", units)[0];
// <%= scout %>
var scout = hero.findByType("griffin-rider", units)[0];
var soldiers = hero.findByType("soldier", units);
var peasants = hero.findByType("peasant", units);

var i = 0;
// <%= soldiers_in %>
for (i = 0; i < soldiers.length; i++) {
    // <%= enqueue %>
    sergeant.enqueue(soldiers[i]);
}
// <%= peasants_in %>
for (i = 0; i < peasants.length; i++) {
    // <%= enqueue %>
    sergeant.enqueue(peasants[i]);
}

while (true) {
    var enemy = scout.findNearestEnemy();
    // <%= enemy_here %>
    if (enemy) {
        for (i = 0; i < soldiers.length; i++) {
            // <%= soldiers_out %>
            sergeant.dequeue();
        }
        break;
    }
}

while (true) {
    var enemy = scout.findNearestEnemy();
    // <%= no_enemies %>
    if (!enemy) {
        // <%= peasants_out %>
        for (i = 0; i < peasants.length; i++) {
            // <%= soldiers_out %>
            sergeant.dequeue();
        }
        break;
    }
}
```