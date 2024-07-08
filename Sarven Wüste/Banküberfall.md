# Level Nummer: 19 - Banküberfall

![Screenshot of the level](welt3-level19.png)

```js
// Warte auf Oger, besiege sie und sammle das Gold.

while(true) {
    var enemies = hero.findEnemies();
    // enemyIndex wird benutzt, um das Gegner-Array zu durchlaufen.
    var enemyIndex = 0;

    // Solange enemyIndex geringer ist als enemies.length
    while (enemyIndex < enemies.length) {
        // Greife den Gegner unter enemyIndex an
        var enemy = enemies[enemyIndex];
        hero.attack(enemy);
        // Erhöhe den enemyIndex um eins.
        enemyIndex++;
    }

    var coins = hero.findItems();
    // coinIndex wird verwendet, um das Münzen-Array zu durchlaufen.
    var coinIndex = 0;

    while (coinIndex < coins.length) {
        // Rufe mit coinIndex eine Münze aus dem Münzen-Array ab
        var coin = coins[coinIndex];
        // Sammle diese Münze.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Erhöhe den coinIndex um eins.
        coinIndex++;
    }
}
```