var WindowControlsOverlay = function WindowControlsOverlay(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(WindowControlsOverlay)
Object.defineProperties(WindowControlsOverlay.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowControlsOverlay",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
WindowControlsOverlay.prototype.ongeometrychange = null
WindowControlsOverlay.prototype.visible = false
///////////////////////////////////////////////////////////////
WindowControlsOverlay.prototype.__proto__ = EventTarget.prototype

catchvm.memory.windowControlsOverlay = {}
catchvm.memory.windowControlsOverlay.__proto__ = WindowControlsOverlay.prototype
catchvm.memory.windowControlsOverlay = catchvm.proxy(catchvm.memory.windowControlsOverlay)
