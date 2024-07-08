# Level Nummer: 3 - Wilde Flucht aus dem Talkessel

![Screenshot of the level](welt3-level3.png)

```js
// Uh oh, eine wilde Flucht! Nutze deine Cleverness, um zur Oase zu gelagen.

while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    if(enemy && hero.distanceTo(enemy) < 12) {
        // Ändere deine Y-Koordinate, um den Yaks auszuweichen! (Und wenn sie dir näher als 12 sind)
        if(enemy.pos.y > hero.pos.y) {
            // Wenn der Yak über dir ist, passe die yPos um 3 abwärts an!
            yPos -= 3;
        } else if (enemy.pos.y < hero.pos.y) {
            // Wenn der Yak unter dir ist, passe yPos um 3 aufwärts an!
            yPos += 3;
        }
    }
    hero.moveXY(xPos, yPos);
}

```