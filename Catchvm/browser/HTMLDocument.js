var HTMLDocument = function HTMLDocument(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLDocument)
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


document = {};
document.__proto__ = HTMLDocument.prototype;



for (var property_ in HTMLDocument.prototype) {
    document[property_] = HTMLDocument.prototype[property_];
    if(!(typeof HTMLDocument.prototype[property_] === 'function')){       
        HTMLDocument.prototype.__defineGetter__(property_, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
}
///////////////////////////////////////////////////////////////

HTMLDocument.prototype.__proto__ = Document.prototype;
document = catchvm.proxy(document);

