# Level Nummer: 33 - Reicher Wildhüter

![Screenshot of the level](welt2-level33.png)

```js
// Benutze "if" und "else if" um alle Situationen zu meistern.
// Setze alles zusammen, um Feinde zu besiegen und Münzen zu sammeln!
// Stell sicher, dass du tolle Rüstung im Laden gekauft hast! 400 Gesundheit empfohlen.

while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();

    if (flag) {
        // Was passiert wenn ich eine Flagge finde?
        hero.pickUpFlag(flag);
    }
    else if (enemy) {
        // Was passiert wenn ich einen Gegner finde?
        hero.attack(enemy);
    }
    else if (item) {
        // Was passiert wenn ich ein Item finde?
        hero.moveXY(item.pos.x, item.pos.y);
    }
}
```