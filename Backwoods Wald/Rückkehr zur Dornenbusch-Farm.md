# Level Nummer: 27 - Rückkehr zur Dornenbusch-Farm

![Screenshot of the level](welt2-level27.png)

```js
// Die Funktion maybeBuildTrap definiert ZWEI Parameter!
function maybeBuildTrap(x, y) {
    // Benutze x und y als Koordinaten, um dich zu bewegen.
    hero.moveXY(x, y);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Benutze buildXY, um eine "fire-trap" an den angegebenen x- und y-Koordinaten zu bauen.
        hero.buildXY("fire-trap", x, y);
    }
}

while(true) {
    // Das ruft `maybeBuildTrap` mit den Koordinaten des oberen Eingangs auf.
    maybeBuildTrap(43, 50);
    
    // Benutze nun maybeBuildTrap beim linken Eingang!
    maybeBuildTrap(25, 34);
    
    // Benutze jetzt vielleicht eine Falle am unteren Eingang!
    maybeBuildTrap(43, 20);
}    
```