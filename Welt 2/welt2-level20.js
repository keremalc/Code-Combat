// Deine Aufgabe ist es, dem Zauberer die Entfernung zu den kommenden Ogern zu sagen.

// Diese Funktion findet den nächsten Gegner und gibt seine Entfernung zurück.
function nearestEnemyDistance() {
    var enemy = hero.findNearestEnemy();
    // Wenn es keinen Gegner gibt, gibt die Funktion 0 zurück.
    var result = 0;
    if (enemy) {
        result = hero.distanceTo(enemy);
    }
    return result;
}

while (true) {
    // Rufe nearestEnemyDistance() auf und
    // Speichere das Ergebnis in der Variable enemyDistance
    var enemyDistance = nearestEnemyDistance();
    // Wenn enemyDistance ist größer als 0:
    if (enemyDistance > 0) {
        hero.say(enemyDistance);
    }
        // Sag den Wert der Variable enemyDistance
        
}
