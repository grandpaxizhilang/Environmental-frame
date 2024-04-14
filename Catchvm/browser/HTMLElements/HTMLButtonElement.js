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
    button.tagName = 'button'.toUpperCase()
    button.childelement = []
    button.father_element = null

    ///////////////////////////////////////////////
    button.__proto__ = HTMLButtonElement.prototype;
    return button;
}
