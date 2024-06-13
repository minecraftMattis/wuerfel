let zahl = 0
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
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
            . . . # #
            . . # # #
            . . . # .
            `)
    } else if (zahl == 8) {
        music.play(music.stringPlayable("C - E - G C5 C5 C5 ", 296), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            . . # . .
            `)
    } else if (zahl == 9) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . # .
            . # # . .
            . # . . .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
