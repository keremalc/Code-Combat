# Level Nummer: 30 - Count Emptiness

![Screenshot of the level](welt1-level30.png)

```js
// Löse das Rätsel des Rätzlers und finde den Schatz.
// Zähle die Leerzeichen auf beiden Seiten eines Rätsels.

// Diese Funktion bewegt den Helden N Schritte nach rechts.
function moveNSteps(n) {
    hero.moveXY(hero.pos.x + 8 * n, hero.pos.y);
}

// Lies das Rätsel.
var riddle = hero.findNearestEnemy().riddle;
// Leerzeichen von beiden Seiten entfernen und in einer Variablen speichern
var trimmed = riddle.trim();
// Finde den Unterschied zwischen der Länge von `riddle` und `trimmed`.
var diff = riddle.length - trimmed.length;
// Nutze das Ergebnis und die moveNSteps Funktion, um zu dem Punkt zu gelangen:
moveNSteps(diff)
// Sag dort etwas!
hero.say("a");

```