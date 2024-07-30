var HTMLParagraphElement = function HTMLParagraphElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLParagraphElement)
Object.defineProperties(HTMLParagraphElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLParagraphElement",
        configurable: true
    }
});

HTMLParagraphElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['p'] = function(){
    var p = new(function(){});
    ///////////////////////////////////////////////
    p.tagName = 'p'.toUpperCase()
    p.childelement = []
    p.father_element = null

    HTMLParagraphElement.prototype.align = '';
    ///////////////////////////////////////////////
    p.__proto__ = HTMLParagraphElement.prototype;
    return p;
}




