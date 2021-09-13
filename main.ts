tiles.setTilemap(tilemap`level1`)
let baby = sprites.create(img`
    . . . . . . . 5 5 5 5 . 5 . . . 
    . . . . . . . . . . . 5 . 5 . . 
    . . . . . . . . 5 5 3 3 3 3 . . 
    . . . . . . . . . 3 3 3 3 f 3 . 
    . 1 1 1 1 1 . . . 3 3 3 3 3 3 3 
    . 1 1 1 1 1 1 . 3 3 3 3 f 3 3 3 
    1 1 1 1 1 1 1 3 3 3 3 3 3 f f . 
    1 1 1 1 1 1 1 3 3 3 3 3 3 3 . . 
    1 1 1 3 1 1 1 3 3 3 . . . . . . 
    . 1 3 3 3 1 1 3 3 3 3 . . . . . 
    . . . 3 3 . . . . . 3 3 . . . . 
    . 3 3 3 3 . . . . . 3 3 3 3 . . 
    3 3 3 3 . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(baby)
scene.cameraFollowSprite(baby)
