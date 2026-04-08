namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const metor = SpriteKind.create()
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 0, function (status) {
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 3))
    mySprite2.startEffect(effects.fire, 500)
    pause(500)
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hi == 0) {
        if (Wave == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 1 . . . . . . . 
                . . . . . . . 1 7 1 . . . . . . 
                . . . . . . 1 7 7 7 1 . . . . . 
                . . . . . . 1 7 7 7 1 . . . . . 
                . . . . . . 1 7 7 7 1 . . . . . 
                . . . . . . 1 7 7 7 1 . . . . . 
                . . . . . . 1 7 1 7 1 . . . . . 
                . . . . . . 1 1 . 1 1 . . . . . 
                . . . . . . 1 1 . 1 1 . . . . . 
                . . . . . . 1 1 . 1 1 . . . . . 
                . . . . . . . 1 . 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
        } else if (Wave == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 1 . . . . . . . 
                . . . . . . . 1 9 1 . . . . . . 
                . . . . . . 1 9 9 9 1 . . . . . 
                . . . . . . 1 9 9 9 1 . . . . . 
                . . . . . 1 9 9 9 9 9 1 . . . . 
                . . . . . 1 9 9 9 9 9 1 . . . . 
                . . . . . 1 9 9 1 9 9 1 . . . . 
                . . . . . 1 9 1 . 1 9 1 . . . . 
                . . . . . 1 9 1 . 1 9 1 . . . . 
                . . . . . 1 1 1 . 1 1 1 . . . . 
                . . . . . 1 1 1 . 1 1 1 . . . . 
                . . . . . 1 1 . . . 1 1 . . . . 
                . . . . . . 1 . . . 1 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
        } else if (Wave == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 1 . . . . . . . 
                . . . . . . . 1 8 1 . . . . . . 
                . . . . . . 1 8 8 8 1 . . . . . 
                . . . . . . 1 8 8 8 1 . . . . . 
                . . . . . 1 8 8 8 8 8 1 . . . . 
                . . . . . 1 8 8 8 8 8 1 . . . . 
                . . . . . 1 8 8 1 8 8 1 . . . . 
                . . . . . 1 8 1 . 1 8 1 . . . . 
                . . . . . 1 8 1 . 1 8 1 . . . . 
                . . . . . 1 1 1 . 1 1 1 . . . . 
                . . . . . 1 1 1 . 1 1 1 . . . . 
                . . . . . 1 1 . . . 1 1 . . . . 
                . . . . . . 1 . . . 1 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
        } else if (Wave == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 1 . . . . . . . 
                . . . . . . . 1 2 1 . . . . . . 
                . . . . . . 1 2 2 2 1 . . . . . 
                . . . . . 1 1 2 2 2 1 1 . . . . 
                . . . . 1 2 2 2 2 2 2 2 1 . . . 
                . . . . 1 2 2 2 2 2 2 2 1 . . . 
                . . . 1 2 2 2 2 1 2 2 2 2 1 . . 
                . . . 1 2 2 2 1 . 1 2 2 2 1 . . 
                . . . 1 2 2 2 1 . 1 2 2 2 1 . . 
                . . . 1 2 1 1 1 . 1 1 1 2 1 . . 
                . . . 1 2 1 1 1 . 1 1 1 2 1 . . 
                . . . 1 1 1 1 . . . 1 1 1 1 . . 
                . . . 1 1 1 . . . . . 1 1 1 . . 
                . . . 1 1 . . . . . . . 1 1 . . 
                . . . . 1 . . . . . . . 1 . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
        } else if (Wave == 5) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c . . . . . . . 
                . . . . . . . c a c . . . . . . 
                . . . . . . c a a a c . . . . . 
                . . . . . c c a a a c f . . . . 
                . . . . f a a a a a a a c . . . 
                . . . c c a a a a a a a f f . . 
                . . . f a a a c . f a a a c . . 
                . c . f a a f f . c c a a f . . 
                . . . f a f f . . . f f a c . . 
                . . . f f f . . . . . f f f . c 
                . . . f f . . c . c . . f f . . 
                . . c . f . . . . . . . f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . c . . . . . . . c . . . 
                . . . . . . . . . . . . . . c . 
                `, mySprite, 0, -150)
        }
        hi = 1
        pause(500)
        hi = 0
    }
})
function BossFight () {
    scaling.scaleByPixels(mySprite2, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    statusbar.max = 100
    mySprite2.setKind(SpriteKind.boss)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 3))
}
function ComStatus () {
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite2)
    statusbar.max = 50
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    statusbar.value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.metor, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
    info.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(0, 9), randint(0, 5)))
})
let mySprite3: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let hi = 0
let Wave = 0
info.setLife(5)
Wave = 1
let he = 1
hi = 0
mySprite = sprites.create(img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f b f . . . . . . 
    . . . . . . . f b f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f 9 9 9 f . . . . . 
    . . . . . . f 9 9 9 f . . . . . 
    . . . . . f f 9 9 1 f f . . . . 
    . . . . f b b f f f 1 1 f . . . 
    . . f f b 1 1 1 1 1 1 1 1 f f . 
    . f b b 1 1 1 1 1 1 1 1 1 1 1 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . f 2 5 2 f . . . . 
    . . . . . . . f 2 5 2 f . . . . 
    . . . . . . . . f 2 f . . . . . 
    . . . . . . . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1f11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff111fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1f1f1ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    ff1ff1ff1fffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffff1f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ff1ff1ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1f11fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
    ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff1f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff111fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    ffffffffffffffffff1f1f1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffff1ff1ff1fffffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffff
    ffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1f11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f11ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    fffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    fffffffffffff1f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffff
    ffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1f11fffffffffffffffffffffffffffffffffffffffffffffffffffff1f11ffffffffffffffffffffffffffff
    ffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffff
    fffffffffffff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffff
    ffffffffffff1ff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1fffffffffffffffffffffffffff
    fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 6))
mySprite2 = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 2 2 2 2 2 2 2 c d b . . 
    . b d c 2 d 2 2 2 2 2 c d b . . 
    . b d c 2 2 2 2 2 2 2 c d b . . 
    . b d c 2 2 2 2 2 2 2 c d b . . 
    . b d c 2 2 2 2 2 2 2 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(0, 9), randint(0, 5)))
ComStatus()
forever(function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.metor)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(0, 9), randint(3, 1)))
    mySprite3.vy += 50
    pause(500)
})
game.onUpdateInterval(100, function () {
    if (info.score() == 10 && he == 1 && Wave == 1) {
        Wave = 2
        game.showLongText("Wave 2", DialogLayout.Bottom)
        info.setScore(11)
    } else if (info.score() == 20 && he == 1 && Wave == 2) {
        Wave = 3
        game.showLongText("Wave 3", DialogLayout.Bottom)
        info.setScore(21)
    } else if (info.score() == 30 && he == 1 && Wave == 3) {
        Wave = 4
        game.showLongText("Wave 4", DialogLayout.Bottom)
        info.setScore(31)
    } else if (info.score() == 40 && he == 1 && Wave == 4) {
        BossFight()
        Wave = 5
    }
})
