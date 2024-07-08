# Level Nummer: 17 - Wüstendelta

![Screenshot of the level](welt3-level17.png)

```js
// Greife nur die Gegner im enemyNames-Array an.
// Achte darauf, in der richtigen Reihenfolge anzugreifen! 0 -> 1 -> 2 -> 3
var enemyNames = ["Kog", "Godel", "Vorobun", "Rexxar"];

hero.attack(enemyNames[0]);
hero.attack(enemyNames[1]);
hero.attack(enemyNames[2]);
hero.attack(enemyNames[3]);
```