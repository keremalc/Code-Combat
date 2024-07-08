# Level Nummer: 13 - Hinterwäldler-Gabelung

![Screenshot of the level](welt2-level13.png)

```js
// Benutze die Funktion checkAndAttack, damit sich dein Code gut liest.

// Diese Funktion hat einen Parameter.
// Mit einem Parameter kann man Daten in eine Funktion übergeben.
function checkAndAttack(target) {
    // Der Parameter ‘target‘ ist nur eine Variable!
    // Es enthält das Argument, wenn die Funktion aufgerufen wurde.
    if(target) {
        hero.attack(target);
    }
    hero.moveXY(43, 34);
}

while(true) {
    hero.moveXY(58, 52);
    var topEnemy = hero.findNearestEnemy();
    // Verwende die Funktion checkAndAttack mit der Variable topEnemy.
    checkAndAttack(topEnemy);
    
    // Gehe zur unteren X-Markierung.
    hero.moveXY(58, 16);
    // Erstelle eine Variable namens bottomEnemy, und finde den nächsten Gegner.
    var bottomEnemy = hero.findNearestEnemy();
    // Benutze die Funktion checkAndAttack und die bottomEnemy-Variable.
    checkAndAttack(bottomEnemy);
}
```