var BaseAudioContext = function BaseAudioContext(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(BaseAudioContext)
Object.defineProperties(BaseAudioContext.prototype, {
    [Symbol.toStringTag]: {
        value: "BaseAudioContext",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

BaseAudioContext.prototype.state = 'running'
BaseAudioContext.prototype.sampleRate = ''
BaseAudioContext.prototype.onstatechange = null
BaseAudioContext.prototype.onsinkchange = null

///////////////////////////////////////////////////////////////

BaseAudioContext.prototype.__proto__ = EventTarget.prototype
