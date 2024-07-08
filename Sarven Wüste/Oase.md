# Level Nummer: 2 - Oase

![Screenshot of the level](welt3-level2.png)

```js
// Laufe nach rechts, um die Oase zu erreichen.
// Laufe zurück nach Links um Yaks in der Nähe auszuweichen.
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        // Laufe nach links indem du 10 von deiner X-Koordinate abziehst.
        x -= 10;
        // Benutze moveXY um dich zur neuen x,y-Position zu bewegen.
        hero.moveXY(x, y);
        
    } else {
        // Laufe nach rechts indem du 10 zu deiner X-Koordinate hinzuaddierst.
        x += 10;
        // Benutze moveXY um dich zur neuen x,y-Position zu bewegen.
        hero.moveXY(x, y);
    }
}
```