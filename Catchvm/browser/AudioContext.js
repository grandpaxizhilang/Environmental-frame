var AudioContext = function AudioContext(options){
    return catchvm.proxy(AudioContext);
};catchvm.func_set_natvie(AudioContext);
Object.defineProperties(AudioContext.prototype, {
    [Symbol.toStringTag]: {
        value: "AudioContext",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

AudioContext.prototype.onstatechange = null
AudioContext.prototype.onsinkchange = null

///////////////////////////////////////////////////////////////

AudioContext.prototype.__proto__ = BaseAudioContext.prototype
