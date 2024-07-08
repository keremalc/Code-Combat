# Level Nummer: 17 - Das finale Kith-Labyrinth

![Screenshot of the level](welt1-level17.png)

```js
// Nutze eine Schleife (`loop`), um dich sowohl zu bewegen als auch anzugreifen.

while(true) {
    hero.moveRight();
    hero.moveUp();
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);

    hero.moveRight();
    hero.moveDown(2);
    hero.moveUp();

}
```