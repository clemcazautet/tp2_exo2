input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        x += 0
    } else {
        led.unplot(x, y)
        x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == 4) {
        x += 0
    } else {
        led.unplot(x, y)
        x += 1
    }
})
let x1 = 0
let y1 = 0
let x = 0
let y = 0
y = 4
x = 0
let score = 0
basic.forever(function () {
    led.plot(randint(0, 4), 0)
    basic.pause(500)
    while (y1 < 5) {
        for (let x1 = 0; x1 <= 4; x1++) {
            for (let y1 = 0; y1 <= 4; y1++) {
                if (led.pointBrightness(x1, y1) == 255) {
                    led.unplot(x1, y1)
                    y1 += 1
                    led.plot(x1, y1)
                    led.unplot(x1, y1)
                }
            }
        }
    }
    if (x == x1 && y == y1) {
        score += 1
    } else {
        x = -1
        y = -1
        x1 = -1
        y1 = -1
        led.unplot(x1, y1)
        basic.showString("score:")
        basic.showNumber(score)
        basic.clearScreen()
    }
})
basic.forever(function () {
    led.plot(x, y)
})
