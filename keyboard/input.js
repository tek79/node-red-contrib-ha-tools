const fs = require('fs')
const _ = require('lodash');
const InputEvent = require('input-event');

const inputDevice = process.argv[2]
if (!fs.existsSync(inputDevice)) {
    console.log(JSON.stringify({ fill: "red", shape: "ring", text: `Device not found：${inputDevice}` }));
} else {
    const input = new InputEvent(inputDevice);
    const keyboard = new InputEvent.Keyboard(input);
    keyboard.on('keypress', _.throttle(function (data) {
        try {
            console.log(JSON.stringify(data))
        } catch (e) {}
    }), 500);
    keyboard.on('keydown', _.throttle(function (data) {
        try {
            console.log(JSON.stringify(data))
        } catch (e) {}
    }), 500);
    keyboard.on('keyup', _.throttle(function (data) {
        try {
            console.log(JSON.stringify(data))
        } catch (e) {}
    }), 500);
}
