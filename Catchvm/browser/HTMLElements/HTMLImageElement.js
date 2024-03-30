var HTMLImageElement = function HTMLImageElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLImageElement)
Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLImageElement",
        configurable: true
    }
});

HTMLImageElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['image'] = function(){
    var image = new(function(){});
    ///////////////////////////////////////////////

    
    
    ///////////////////////////////////////////////
    image.__proto__ = HTMLImageElement.prototype;
    return image;
}