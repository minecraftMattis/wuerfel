let zahl = 0
input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    zahl = randint(1, 9)
    if (zahl == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (zahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (zahl == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (zahl == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    } else if (zahl == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            `)
    } else if (zahl == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            . # # . .
            `)
    } else if (zahl == 7) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . # # #
            . . . # .
            `)
    } else {
    	
    }
})
basic.forever(function () {
	
})
