let range: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    basic.showString("siyamthanda")
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    music.rest(music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    let yrufh7tygt5f: neopixel.Strip = null
    basic.showNumber(182)
    radio.sendValue("h23", 65728)
    if (record.audioStatus(record.AudioStatus.Recording)) {
        basic.showArrow(ArrowNames.South)
        led.plot(0, 0)
        radio.setTransmitPower(7)
    }
    range = yrufh7tygt5f.range(0, 4)
})
