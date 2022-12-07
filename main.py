ledpasok = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
ledpasok.show_color(neopixel.colors(NeoPixelColors.RED))
while True:
    basic.pause(500)
    ledpasok.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    basic.pause(500)
    ledpasok.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(500)
    ledpasok.show_color(neopixel.colors(NeoPixelColors.BLUE))

def on_forever():
    pass
basic.forever(on_forever)
