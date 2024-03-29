
var HTMLDivElement = function HTMLDivElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLDivElement)
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});

HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['div'] = function(){
    var div = new(function(){});
    ///////////////////////////////////////////////
    HTMLDivElement.prototype.align = '';
    ///////////////////////////////////////////////
    div.__proto__ = HTMLDivElement.prototype;
    return div;
}




