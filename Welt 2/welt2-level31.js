// Wenn du versuchst einen entfernten Gegner anzugreifen, wird dein Held in dessen Richtung ziehen und alle Flaggen ignorieren.
// Du musst aufpassen, dass du nur Gegner anzugreifst, die nah bei dir sind!

while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    
    if(flag) {
        // Hole die Flagge.
        hero.pickUpFlag(flag);
        hero.say("Ich sollte die Flagge holen.");
    } else if(enemy) {
        // Greife nur an, wenn die Entfernung des Gegners <10 Metern beträgt.
        if (hero.distanceTo(enemy) < 10) {
            if (hero.isReady("cleave")) {
                hero.cleave(enemy);
            }
            else {
                hero.attack(enemy);
            }
        }
    }
}
