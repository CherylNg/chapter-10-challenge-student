input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    radio.sendString("Adam")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    radio.sendString("Adam")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    radio.sendString("Adam")
})
radio.setGroup(1)
