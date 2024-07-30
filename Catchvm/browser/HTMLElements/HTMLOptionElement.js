var HTMLOptionElement = function HTMLOptionElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLOptionElement)
Object.defineProperties(HTMLOptionElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLOptionElement",
        configurable: true
    }
});

HTMLOptionElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['option'] = function(){
    var option = new(function(){});
    ///////////////////////////////////////////////
    option.tagName = 'option'.toUpperCase()
    option.childelement = []
    option.father_element = null
    
    ///////////////////////////////////////////////
    option.__proto__ = HTMLOptionElement.prototype;
    return option;
}
