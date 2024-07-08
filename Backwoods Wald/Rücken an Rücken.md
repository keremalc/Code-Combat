# Level Nummer: 5 - Rücken an Rücken

![Screenshot of the level](welt2-level5.png)

```js
// Bleibe in der Mitte und verteidige!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Greife entweder den Gegner an ...
        hero.attack(enemy);
    }
    else {
        // ... oder bewege dich zurück zu deiner Verteidungsposition.
        hero.moveXY(40, 34);
    }
}
```