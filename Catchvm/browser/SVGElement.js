var SVGElement = function SVGElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(SVGElement)
Object.defineProperties(SVGElement.prototype, {
    [Symbol.toStringTag]: {
        value: "SVGElement",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
SVGElement.prototype.__proto__ = Element.prototype