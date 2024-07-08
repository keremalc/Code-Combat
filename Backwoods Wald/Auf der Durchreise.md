# Level Nummer: 25 - Auf der Durchreise

![Screenshot of the level](welt2-level25.png)

```js
// Beleidige diesen Stamm friedlicher Oger nicht.

while(true) {
    var item = hero.findNearestItem();
    if(item) {
        // Falls item.type UNGLEICH “gem“ ist
        if(item.type != "gem") {
            // Dann folge deinem Wolfswelpen.
            hero.moveXY(pet.pos.x, pet.pos.y);
        }
        // Ansonsten:
        else {
            hero.moveXY(item.pos.x, item.pos.y);
        }
            // Gehe zur Position des Edelsteins.
            
    }
}
```