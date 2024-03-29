var HTMLElement = function HTMLElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLElement)
Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////

HTMLElement.prototype.__proto__ = Element.prototype;
