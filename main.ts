let LedPasik = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB_RGB)
LedPasik.showColor(neopixel.colors(NeoPixelColors.Red))
while (true) {
    basic.pause(500)
    LedPasik.showColor(neopixel.rgb(5, 0, 0))
    basic.pause(500)
    LedPasik.showColor(neopixel.rgb(0, 5, 0))
    basic.pause(500)
    LedPasik.showColor(neopixel.rgb(0, 0, 5))
    basic.pause(500)
    LedPasik.showColor(neopixel.rgb(5, 5, 5))
    basic.pause(2000)
    LedPasik.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    LedPasik.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    LedPasik.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    LedPasik.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    LedPasik.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
    LedPasik.setPixelColor(5, neopixel.colors(NeoPixelColors.Indigo))
    LedPasik.setPixelColor(6, neopixel.colors(NeoPixelColors.Violet))
    LedPasik.setPixelColor(7, neopixel.colors(NeoPixelColors.Purple))
    LedPasik.show()
    basic.pause(2000)
    for (let index = 0; index < 100; index++) {
        LedPasik.rotate(1)
        LedPasik.show()
        basic.pause(100)
    }
}
basic.forever(function () {
	
})
