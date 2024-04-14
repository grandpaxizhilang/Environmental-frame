
var Serial = function Serial(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Serial)
Object.defineProperties(Serial.prototype, {
    [Symbol.toStringTag]: {
        value: "Serial",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Serial.prototype.onconnect = null
Serial.prototype.ondisconnect = null
///////////////////////////////////////////////////////////////
Serial.prototype.__proto__ = EventTarget.prototype

catchvm.memory.serial = {}
catchvm.memory.serial.__proto__ = Serial.prototype
catchvm.memory.serial = catchvm.proxy(catchvm.memory.serial)