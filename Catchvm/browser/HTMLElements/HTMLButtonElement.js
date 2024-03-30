var HTMLButtonElement = function HTMLButtonElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLButtonElement)
Object.defineProperties(HTMLButtonElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLButtonElement",
        configurable: true
    }
});

HTMLButtonElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['button'] = function(){
    var button = new(function(){});
    ///////////////////////////////////////////////



    ///////////////////////////////////////////////
    button.__proto__ = HTMLButtonElement.prototype;
    return button;
}
