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



///////////////////////////////////////////////////////////////

HTMLDocument.prototype.__proto__ = Document.prototype;
document = catchvm.proxy(document);

Object.defineProperty(window, 'document', {
    configurable : false,
    enumerable: true
});



