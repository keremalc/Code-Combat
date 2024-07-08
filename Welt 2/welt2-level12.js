// Dies definiert eine Funktion namens findAndAttackEnemy
function findAndAttackEnemy() {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}

// Diese Code ist nicht Teil der Funktion.
while(true) {
    // Nun kannst du mithilfe von findAndAttackEnemy durch das Dorf patroullieren
    hero.moveXY(35, 34);
    findAndAttackEnemy();
    
    // Gehe nun zum rechten Eingang.
    hero.moveXY(60, 31);
    // Benutze findeUndAttackiereGegner
    findAndAttackEnemy()
}
