# Level Nummer: 14 - Überlass' es dem Cleaver

![Screenshot of the level](welt2-level14.png)

```js
// Das hier zeigt, wie man eine Funktion "cleaveWhenClose" definiert
// Diese Funktion definiert einen Parameter genannt target (Ziel)
function cleaveWhenClose(target) {
    if(hero.distanceTo(target) < 5) {
        // schreibe hier Deinen Angriffscode
        // wenn "cleave" bereit ist, dann benutze es auf das Ziel
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        hero.attack(enemy);
        // sonst, greife einfach das Ziel (target) an!
        
    }
}

// Dieser Code ist kein Teil der Funktion.
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Beachte: innerhalb der Funktion "cleaveWhenClose" wird der Feind als "target" bezeichnet und nicht als "emeny".
        cleaveWhenClose(enemy);
    }
}
```