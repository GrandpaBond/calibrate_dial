# in_lo	in_hi	out_lo	out_hi
# 0	       192	        -120	        -70
# 192	       280	          -70	         55
# 280	       347	          55	         90
# 347	       415	          90	       110
# 415	       631	        110	       120
def myDial(Reading: number):
    if Reading < 192:
        return Math.map(Reading, 0, 192, -120, -70)
    elif Reading < 280:
        return Math.map(Reading, 192, 280, -70, 55)
    elif Reading < 347:
        return Math.map(Reading, 280, 347, 55, 90)
    elif Reading < 415:
        return Math.map(Reading, 347, 415, 90, 110)
    else:
        return Math.map(Reading, 415, 622, 110, 120)
        
pins.set_audio_pin(AnalogPin.P1)
value = pins.analog_read_pin(AnalogPin.P0)

def on_forever():
    global value
    value = bitcommander.read_dial()
    bitcommander.set_led_color(0xFF0000)
    bitcommander.led_show()
    while not (bitcommander.read_button(BCButtons.YELLOW)):
        basic.show_number(value)
        basic.pause(500)
        basic.clear_screen()
        basic.pause(100)
    bitcommander.set_led_color(0x00FF00)
    bitcommander.led_show()
    while bitcommander.read_button(BCButtons.YELLOW):
        basic.pause(20)
basic.forever(on_forever)
