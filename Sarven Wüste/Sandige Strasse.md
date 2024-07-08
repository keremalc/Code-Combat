# Level Nummer: 4 - Sandige Strasse

![Screenshot of the level](welt3-level4.png)

```js
// Erreiche die Oase. Achte auf neue Gegner: Oger Späher!
// Gehe hoch und nach rechts, indem du zu deiner aktuellen X und Y Position addierst.

var x = hero.pos.x;
var y = hero.pos.y;

while(true) {
    var enemy = hero.findNearestEnemy();
     // Greife alle Gegner, die du siehst, an.
    if (enemy) {
        hero.attack(enemy);
    }
    else {
        // Wenn keine Gegner zu sehen sind, begib dich nach oben rechts.
        x += 5;
        y += 5;
        hero.moveXY(x, y);
    }
}
```