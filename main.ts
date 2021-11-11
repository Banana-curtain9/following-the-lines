let Blue = 0
let Green = 0
let Red = 0
let LED = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        }
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        } else {
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        }
    }
})
basic.forever(function () {
    Red = neopixel.rgb(0, 0, 0)
    Green = neopixel.rgb(0, 0, 0)
    Blue = neopixel.rgb(0, 0, 255)
    for (let index = 0; index < 255; index++) {
        Red += 1
        Blue += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        Green += 1
        Red += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        Blue += 1
        Green += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
})
