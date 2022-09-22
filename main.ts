// use this code on two microbits, and rock paper scissors can be played smoothly
radio.onReceivedNumber(function (receivedNumber) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 3844, 1777, 130, 113, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    if (receivedNumber == 1) {
        if (myhand == 1) {
            basic.showString("TIE")
            radio.sendString("TIE")
        } else if (myhand == 2) {
            basic.showString("WIN")
            radio.sendString("LOSS")
        } else {
            basic.showString("LOSS")
            radio.sendString("WIN")
        }
    }
    if (receivedNumber == 2) {
        if (myhand == 1) {
            basic.showString("LOSS")
            radio.sendString("WIN")
        } else if (myhand == 2) {
            basic.showString("TIE")
            radio.sendString("TIE")
        } else {
            basic.showString("WIN")
            radio.sendString("LOSS")
        }
    }
    if (receivedNumber == 3) {
        if (myhand == 3) {
            basic.showString("TIE")
            radio.sendString("TIE")
        } else if (myhand == 1) {
            basic.showString("WIN")
            radio.sendString("LOSS")
        } else {
            basic.showString("LOSS")
            radio.sendString("WIN")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    myhand += 1
    if (myhand == 4) {
        myhand = 3
    }
    if (myhand == rockindex) {
        rockimage.showImage(0)
    } else if (myhand == paperindex) {
        paperimage.showImage(0)
    } else if (myhand == scissorsindex) {
        scissorsimage.showImage(0)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1432, 2972, 130, 113, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    radio.sendNumber(myhand)
})
input.onButtonPressed(Button.B, function () {
    myhand += -1
    if (myhand == 0) {
        myhand = 1
    }
    if (myhand == rockindex) {
        rockimage.showImage(0)
    } else if (myhand == paperindex) {
        paperimage.showImage(0)
    } else if (myhand == scissorsindex) {
        scissorsimage.showImage(0)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    pickshape()
})
function pickshape () {
    let choice = 0
    myhand = choice
}
let myhand = 0
let scissorsimage: Image = null
let paperimage: Image = null
let rockimage: Image = null
let scissorsindex = 0
let paperindex = 0
let rockindex = 0
radio.setGroup(203)
rockindex = 1
paperindex = 2
scissorsindex = 3
rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paperimage = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
scissorsimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.forever(function () {
	
})
