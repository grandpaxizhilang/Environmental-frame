var HTMLInputElement = function HTMLInputElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLInputElement)
Object.defineProperties(HTMLInputElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLInputElement",
        configurable: true
    }
});

HTMLInputElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['input'] = function(){
    var input = new(function(){});
    ///////////////////////////////////////////////
    input.tagName = 'input'.toUpperCase()
    input.childelement = []
    input.father_element = null
    
    ///////////////////////////////////////////////
    input.__proto__ = HTMLInputElement.prototype;
    return input;
}