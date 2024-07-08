# Level Nummer: 3 - 0ger-Schlucht-Gauner

![Screenshot of the level](welt4-level3.png)

```js
// Du hast nur 20 Sekunden bis die Oger-Horden einfallen!
// Nimm dir soviel Gold wie möglich, dann fliehe zur Basis und befestige sie mit einem Zaun!
while(hero.time < 22) {
    // Münzen sammeln
    var item = hero.findNearestItem();
    
    hero.move(item.pos);
}

while(hero.pos.x > 16) {
    hero.moveXY(16, 39);
    hero.buildXY("fence", 21, 38);
}
```