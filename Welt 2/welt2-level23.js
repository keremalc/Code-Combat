// Bestimmte Münzen und Edelsteine ziehen Blitze an.
// Der Held sollte nur silberne und blaue Edelsteine einsammeln.

while (true) {
    var item = hero.findNearestItem();
    // Eine Silbermünze hat einen Wert von 2.
    // Sammle es ein, wenn der item.type gleich “coin“ ist.
    // UND item.value ist gleich 2.
    if (item.type == "coin" && item.value == 2) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    // Ein blauer Edelstein hat einen Wert von 10.
    // Sammle es ein, wenn der item.type gleich “gem“ ist.
    // UND item.value ist gleich 10.
    if (item.type == "gem" && item.value == 10) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}
