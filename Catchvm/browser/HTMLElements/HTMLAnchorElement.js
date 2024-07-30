
var HTMLAnchorElement = function HTMLAnchorElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLAnchorElement)
Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAnchorElement",
        configurable: true
    }
});

HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['a'] = function(){
    var a = new(function(){});
    ///////////////////////////////////////////////
    a.tagName = 'a'.toUpperCase()
    a.childelement = []
    a.father_element = null
    
    ///////////////////////////////////////////////
    a.__proto__ = HTMLAnchorElement.prototype;
    return a;
}




