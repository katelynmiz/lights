hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, 100)
    basic.pause(500)
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(500)
    hummingbird.setLED(ThreePort.Two, 100)
    basic.pause(500)
    hummingbird.setLED(ThreePort.Two, 0)
    basic.pause(500)
    hummingbird.setLED(ThreePort.Three, 100)
    basic.pause(500)
    hummingbird.setLED(ThreePort.Three, 0)
    basic.pause(500)
    basic.pause(5000)
})
basic.forever(function () {
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    175,
    184,
    151
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    173,
    51,
    21
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    181,
    225,
    255
    )
    basic.pause(2000)
})
