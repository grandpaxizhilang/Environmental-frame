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


catchvm.memory.HTMLElements['image'] = function(width, height){
    var image = new(function(){});
    ///////////////////////////////////////////////
    image.tagName = 'image'.toUpperCase()
    image.childelement = []
    image.father_element = null

    HTMLImageElement.prototype.width = width;
    HTMLImageElement.prototype.height = height;
    
    ///////////////////////////////////////////////
    image.__proto__ = HTMLImageElement.prototype;
    return image;
}