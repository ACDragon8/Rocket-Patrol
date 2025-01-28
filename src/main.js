/*
Hao Deng
Rocket Patrol Update 1.0.0.0.0.0.0.0.0.(...).1
Time:8:47PM - 
Mods:
Total - 
Added bgm - 1 pt
Allowed controlling rocket while fired - 1pt
Added visible timer to game - 3pt
Added time add on successful hit and time loss on miss - 5pt
Citations:
bgm used - 8 Bit Adventure - by David Renda
for math.random - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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