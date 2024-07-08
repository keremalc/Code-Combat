// Drücke Übermitteln, wenn du bereit bist, Fahnen zu platzieren.
// Flaggen-Buttons erscheinen links unten nach dem Klicken auf "Senden".
while(true) {
    var flag = hero.findFlag();
    if (flag) {
        hero.pickUpFlag(flag);
    }
    else {
        hero.say("Platziere die Flagge für mich, um mir den Weg zu weisen.");
    }
}
