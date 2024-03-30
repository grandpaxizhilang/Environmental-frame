var HTMLAudioElement = function HTMLAudioElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLAudioElement)
Object.defineProperties(HTMLAudioElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAudioElement",
        configurable: true
    }
});

HTMLAudioElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['audio'] = function(){
    var audio = new(function(){});
    ///////////////////////////////////////////////

    
    
    ///////////////////////////////////////////////
    audio.__proto__ = HTMLAudioElement.prototype;
    return audio;
}