
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


catchvm.memory.HTMLElements['anchor'] = function(){
    var anchor = new(function(){});
    ///////////////////////////////////////////////

    
    
    ///////////////////////////////////////////////
    anchor.__proto__ = HTMLAnchorElement.prototype;
    return anchor;
}




