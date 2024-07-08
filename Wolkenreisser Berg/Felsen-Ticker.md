# Level Nummer: 1 - Felsen-Ticker

![Screenshot of the level](welt4-level1.png)

```js
// Hole Pender Spellbane ein, um ihre Geheimnisse zu erfahren.

while(true) {
    // Pender ist die einzige Freundin hier, deshalb ist sie immer die naheste.
    var pender = hero.findNearest(hero.findFriends());

    if (pender) {
        // moveXY() wird dich dorthin bewegen, wo Pender ist,
        // aber sie wird sich weiter bewegt haben, bis du dort bist.
        //hero.moveXY(pender.pos.x, pender.pos.y);
        
        // move() bewegt nur einen Schritt zur Zeit,
        // deshalb kannst du es nutzen, um dein Ziel zu verfolgen.
        hero.move(pender.pos);
    }
}
```