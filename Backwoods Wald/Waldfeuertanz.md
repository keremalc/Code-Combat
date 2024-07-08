# Level Nummer: 11 - Waldfeuertanz

![Screenshot of the level](welt2-level11.png)

```js
// In diesem Level ist der Dunkelstein böse! Weiche ihm aus in dem du dich in die andere Richtung bewegst.
while (true) {
    var evilstone = hero.findNearestItem();
    if (evilstone) {
        var pos = evilstone.pos;
        if (pos.x == 34) {     // == bedeutet "ist gleich"
            // Wenn der Dunkelstein links ist, geh nach rechts
            hero.moveXY(46, 22);
            
        } else {
            // Wenn der Dunkelstein rechts ist, geh nach links
            hero.moveXY(34, 23);
        }
    } else {
        // Wenn es keinen Dunkelstein gibt, geh in die Mitte.
        hero.moveXY(40, 23);
    }
}
```