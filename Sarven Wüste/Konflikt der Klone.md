# Level Nummer: 27 - Konflikt der Klone

![Screenshot of the level](welt3-level27.png)

```js
// Du wirst eine gute Strategie und gute Ausrüstung brauchen, um das zu gewinnen!
// Dein Klon wird die gleiche Ausstattung haben wie du!
// Aber sie sind nicht besonders geschickt im Umgang mit Superkräften.

while (true) {
    
    var archer = hero.findByType("archer", hero.findEnemies());
    var enemy = hero.findNearestEnemy();
    
    if (archer.length > 0) {
        while(archer[0].health > 0) {
            hero.attack(archer[0]);
        }
    }
    else 
    {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    }
}
```