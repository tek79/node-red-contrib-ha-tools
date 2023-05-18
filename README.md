# node-red-contrib-ha-tools

A forked version of the node-red-contrib-ha-tools keyboard input node. Extended for use with RF/Bluetooth/BLE remotes that appear as a standard HID keyboard device. Tri-state - key press (1), key down (2), and key up (0).

msg.payload.value contains the state
msg.payload.code is the HID keycode in decimal (base-10)
