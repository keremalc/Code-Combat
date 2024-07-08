// Nutze eine Schleife (`loop`), um dich sowohl zu bewegen als auch anzugreifen.

while(true) {
    hero.moveRight();
    hero.moveUp();
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);

    hero.moveRight();
    hero.moveDown(2);
    hero.moveUp();

}
