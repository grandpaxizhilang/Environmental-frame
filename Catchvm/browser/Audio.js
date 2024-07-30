var Audio = function Audio(){
    return catchvm.memory.HTMLElements['audio']()
};catchvm.func_set_natvie(Audio);
Object.defineProperties(Audio.prototype, {
    [Symbol.toStringTag]: {
        value: "Audio",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
Audio.prototype = HTMLAudioElement.prototype