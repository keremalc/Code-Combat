# Level Nummer: 9 - Jagt Party

![Screenshot of the level](welt4-level9.png)

```js
while (true) {
    var friends = hero.findFriends();
    
    
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        var target = friend.findNearestEnemy();
        
        if (target)
        {
            hero.command(friend, "attack", target);
        }
        else {
            if (friend.pos.x < 71) {
                hero.command(friend, "move", {x: friend.pos.x + 3 , y: friend.pos.y});
            }

        }
        
    }
}
```