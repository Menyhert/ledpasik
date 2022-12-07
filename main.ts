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
}
basic.forever(function () {
	
})
