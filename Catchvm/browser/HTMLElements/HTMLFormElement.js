var HTMLFormElement = function HTMLFormElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLFormElement)
Object.defineProperties(HTMLFormElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLFormElement",
        configurable: true
    }
});

HTMLFormElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['form'] = function(){
    var form = new(function(){});
    ///////////////////////////////////////////////



    ///////////////////////////////////////////////
    form.__proto__ = HTMLFormElement.prototype;
    return form;
}



