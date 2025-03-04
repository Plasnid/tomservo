function mover () {
    servos.P1.setAngle(150)
    servos.P0.setAngle(90)
    basic.pause(1000)
    reset()
}
function reset () {
    servos.P0.setAngle(0)
    servos.P1.setAngle(0)
}
mover()
