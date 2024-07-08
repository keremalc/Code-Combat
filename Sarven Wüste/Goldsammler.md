# Level Nummer: 22 - Goldsammler

![Screenshot of the level](welt3-level22.png)

```js
// Um am schnellsten an Gold zu kommen, sammle nur Goldmünzen.

while(true) {
    var coins = hero.findItems();
    var coinIndex = 0;

    // Schreibe dies in eine Schleife, die über alle Münzen läuft.
    
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
        // Goldmünzen haben einen Wert von 3.
        if (coin.value == 3) {
            // Sammle nur Goldmünzen.
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex++;
    }
}
```