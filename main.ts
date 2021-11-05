// in_lo	in_hi	out_lo	out_hi
// 0	       192	        -120	        -70
// 192	       280	          -70	         55
// 280	       347	          55	         90
// 347	       415	          90	       110
// 415	       631	        110	       120
function myDial (Reading: number) {
    if (Reading < 192) {
        return Math.map(Reading, 0, 192, -120, -70)
    } else if (Reading < 280) {
        return Math.map(Reading, 192, 280, -70, 55)
    } else if (Reading < 347) {
        return Math.map(Reading, 280, 347, 55, 90)
    } else if (Reading < 415) {
        return Math.map(Reading, 347, 415, 90, 110)
    } else {
        return Math.map(Reading, 415, 622, 110, 120)
    }
}
let msg = ""
let angle = 0
pins.setAudioPin(AnalogPin.P1)
let value = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    value = bitcommander.readDial()
    angle = Math.round(myDial(value))
    msg = "" + convertToText(value) + "=" + convertToText(angle)
    bitcommander.setLedColor(0xFF0000)
    bitcommander.ledShow()
    while (!(bitcommander.readButton(BCButtons.Yellow))) {
        basic.showString(msg)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(100)
    }
    bitcommander.setLedColor(0x00FF00)
    bitcommander.ledShow()
    while (bitcommander.readButton(BCButtons.Yellow)) {
        basic.pause(20)
    }
})
