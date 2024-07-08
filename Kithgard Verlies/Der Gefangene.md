# Level Nummer: 8 - Der Gefangene

![Screenshot of the level](welt1-level8.png)

```js
// Befreie den Gefangen, besiege den Wächter und schnappe dir den Edelstein.

// Befreie Patrick, welcher hinter der "schwachen Tür" ist.
hero.attack("Weak Door");
// Töte die Wache mit dem Namen "Two"
hero.attack("Two");
// Erhalte den Edelstein.
hero.moveDown(2);
hero.moveRight(1);
```