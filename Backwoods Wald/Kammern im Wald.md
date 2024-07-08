# Level Nummer: 3 - Kammern im Wald

![Screenshot of the level](welt2-level3.png)

```js
// Finde einen Weg durch den Wald, aber sei wachsam!
// In diesen Kammern könnten Oger sein!

hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// Die if-Anweisung wird prüfen ob eine Variable einen Oger hat.
if(enemy) {
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(49, 51);
enemy = hero.findNearestEnemy();
if(enemy) {
    // Greife den Feind hier an:
    hero.attack(enemy);
}

hero.moveXY(58, 14);
enemy = hero.findNearestEnemy();
// Nutze eine if-Anweisung um zu prüfen ob ein Feind existiert.
if(enemy) {
    // Greife den Feind hier an:
    hero.attack(enemy);
}
// Finde einen Weg durch den Wald, aber sei wachsam!
// In diesen Kammern könnten Oger sein!

hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// Die if-Anweisung wird prüfen ob eine Variable einen Oger hat.
if(enemy) {
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(49, 51);
enemy = hero.findNearestEnemy();
if(enemy) {
    // Greife den Feind hier an:
    hero.attack(enemy);
}

hero.moveXY(58, 14);
enemy = hero.findNearestEnemy();
// Nutze eine if-Anweisung um zu prüfen ob ein Feind existiert.
if(enemy) {
    // Greife den Feind hier an:
    hero.attack(enemy);
}
```