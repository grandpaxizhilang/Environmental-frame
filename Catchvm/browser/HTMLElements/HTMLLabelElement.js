var HTMLLabelElement = function HTMLLabelElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLLabelElement)
Object.defineProperties(HTMLLabelElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLLabelElement",
        configurable: true
    }
});

HTMLLabelElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['label'] = function(){
    var label = new(function(){});
    ///////////////////////////////////////////////
    label.tagName = 'label'.toUpperCase()
    label.childelement = []
    label.father_element = null

    ///////////////////////////////////////////////
    label.__proto__ = HTMLLabelElement.prototype;
    return label;
}