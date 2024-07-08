// Setze Flagge dort, wo du Fallen bauen möchtest.
// Wenn du keine Falls baust, dann sammle Münzen!

while(true) {
    var flag = hero.findFlag();
    if (flag) {
        // Wie bekommt man flagX und flagY von der Flaggenposition?
        // (Schaue weiter unten, wie man x und y von Gegenständen erhalten kann.)
        var flagX = flag.pos.x;
        var flagY = flag.pos.y;
        
        hero.buildXY("fire-trap", flagX, flagY);
        hero.pickUpFlag(flag);
    }
    else {
        var item = hero.findNearestItem();
        if (item) {
            var itemPos = item.pos;
            var itemX = itemPos.x;
            var itemY = itemPos.y;
            hero.moveXY(itemX, itemY);
        }
    }
}
