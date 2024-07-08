// Greif Munchkins an, ruf Schläger und ignoriere Burls.

// Diese Funktion definiert das Verhalten des Helden gegenüber Feinden.
function dealEnemy(enemy) {
    // Wenn enemy.type "munchkin" ist:
    if (enemy.type == "munchkin") {
        hero.attack(enemy);
    }
        // Dann greife es an:
        
    // Wenn der Feind den Typ "Schläger" hat:
    if (enemy.type == "brawler") {
        hero.say("Brawler!");
    }
        // Sag dann etwas, um den Schläger zu rufen:
        
}

while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        dealEnemy(enemy);
    }
    else {
        hero.moveXY(30, 34);
    }
}
