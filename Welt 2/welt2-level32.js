// Du kannst Flaggen verwenden, um verschiedene Taktiken zu wählen.
// In diesem Level bedeutet die grüne Fahne, dass du zu der Fahne gehen willst.
// Die schwarze Flagge bedeutet, dass du bei der Flagge schlagen willst.
// Der Arzt wird dich am Roten X heilen.

while(true) {
    var green = hero.findFlag("green");
    var black = hero.findFlag("black");
    var nearest = hero.findNearestEnemy();
    
    if (green) {
        hero.pickUpFlag(green);
    } else if (black && hero.isReady("cleave")) {
        hero.pickUpFlag(black);
        // Spaltangriff!
        hero.cleave(nearest);
        
    } else if (nearest && hero.distanceTo(nearest) < 10) {
        // Angriff!
        hero.attack(nearest);
    }
}
