# Level Nummer: 6 - Waldland Hackebeil

![Screenshot of the level](welt2-level6.png)

```js
// Nutze deine neue Spalten (`cleave`) Fähigkeit so oft wie möglich.

hero.moveXY(23, 23);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        // Teile und herrsche.
        hero.cleave(enemy);
    }
    else {
        // Ansonsten (wenn `cleave` nicht bereit ist), mach deine normale Attacke.
        hero.attack(enemy);
    }
}
```