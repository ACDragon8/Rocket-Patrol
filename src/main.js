/*
Hao Deng
Rocket Patrol Update 1.0.0.0.0.0.0.0.0.(...).1
Time:8:47PM - 
Mods:
Total - 
Added bgm - 1 pt
Allowed controlling rocket while fired - 1pt (use arrow keys )

Added visible timer to game - 3pt

Implemented parallax scrolling for background? - 3pts
(It was a part of the tutorial it was already in the play scene, so I implemented it for the menu scene)

Added time add on successful hit (2 sec) and time loss on miss (1 sec) - 5pt
(this is evil btw)

Added new "scout" enemy which travels twice as fast and waits 5 seconds to respawn after being hit - 5ft

Citations:
bgm used - 8 Bit Adventure - by David Renda
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
}

let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

let keyFIRE, keyRESET, keyLEFT, keyRIGHT