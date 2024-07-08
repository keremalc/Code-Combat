# Level Nummer: 20 - Passender Gegner

![Screenshot of the level](welt4-level20.png)

```js
// In den Wäldern verstecken sich Gegner. Beschütze die Bauern.
// Das letzte Wort in der Nachricht des Bauern ist ein Hinweis.

for (var x = 8; x <= 72; x += 16) {
    hero.moveXY(x, 22);
    // Bauern wissen, wer beschwört werden soll.
    var peasant = hero.findNearest(hero.findFriends());
    var message = peasant.message;
    if (message) {
        // Die Wörter sind durch Leerzeichen getrennt.
        var words = message.split(" ");
        // "words" ist ein Array von Wörtern aus der "message"
        // Nimm das letzte Wort. Es ist der entsprechende Einheitentyp.
        var lastWords = words[words.length - 1];
        // Beschwöre den benötigten Einheitstypus.
        hero.summon(lastWords);
    }
}

for (var i = 0; i < hero.built.length; i++) {
    var unit = hero.built[i];
    // Befiehl der Einheit, ihre Position zu verteidigen.
    hero.command(unit, "defend", unit.pos);
}
```