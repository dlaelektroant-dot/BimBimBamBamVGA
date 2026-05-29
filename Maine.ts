//% color=#0000FF icon="\uf108"
namespace VGA {

    //% block="start VGA"
    export function startVGA(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }

    //% block="draw pixel x %x y %y"
    export function drawPixel(x: number, y: number): void {

        if (x % 2 == 0) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P1, 0)
        }

        if (y % 2 == 0) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }

    //% block="sync"
    export function sync(): void {
        control.waitMicros(32)
    }
}
