var HTMLHeadElement = function HTMLHeadElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLHeadElement)
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHeadElement",
        configurable: true
    }
});

HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['head'] = function(){
    var head = new(function(){});
    ///////////////////////////////////////////////
    head.tagName = 'head'.toUpperCase()
    head.childelement = []
    head.father_element = null

    ///////////////////////////////////////////////
    head.__proto__ = HTMLHeadElement.prototype;
    return head;
}
