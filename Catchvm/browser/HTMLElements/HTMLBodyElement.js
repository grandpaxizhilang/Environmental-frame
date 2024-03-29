var HTMLBodyElement = function HTMLBodyElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLBodyElement)
Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLBodyElement",
        configurable: true
    }
});

HTMLBodyElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['body'] = function(){
    var body = new(function(){});
    ///////////////////////////////////////////////
    HTMLBodyElement.prototype.aLink = ''
    HTMLBodyElement.prototype.background = ''
    HTMLBodyElement.prototype.bgColor = ''
    HTMLBodyElement.prototype.link = ''
    HTMLBodyElement.prototype.text = ''
    HTMLBodyElement.prototype.vLink = ''
    ///////////////////////////////////////////////
    body.__proto__ = HTMLBodyElement.prototype;
    return body;
}
