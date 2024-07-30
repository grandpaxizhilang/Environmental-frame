var HTMLSpanElement = function HTMLSpanElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLSpanElement)
Object.defineProperties(HTMLSpanElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLSpanElement",
        configurable: true
    }
});

HTMLSpanElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['span'] = function(){
    var span = new(function(){});
    ///////////////////////////////////////////////
    span.tagName = 'span'.toUpperCase()
    span.childelement = []
    span.father_element = null

    ///////////////////////////////////////////////
    span.__proto__ = HTMLSpanElement.prototype;
    return span;
}
