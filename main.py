Blue = 0
Green = 0
Red = 0
LED = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def on_forever():
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
            maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
            maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
            maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        else:
            maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
basic.forever(on_forever)

def on_forever2():
    global Red, Green, Blue
    Red = neopixel.rgb(0, 0, 0)
    Green = neopixel.rgb(0, 0, 0)
    Blue = neopixel.rgb(0, 0, 255)
    for index in range(255):
        Red += 1
        Blue += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    for index2 in range(255):
        Green += 1
        Red += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    for index3 in range(255):
        Blue += 1
        Green += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
basic.forever(on_forever2)
