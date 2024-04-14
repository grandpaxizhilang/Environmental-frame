var Element = function Element(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Element)
Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

Element.prototype.tagName = ''



Element.prototype.getAttribute = function getAttribute(attributeName){
    console.log(arguments)
    // debugger;
    return null;
};catchvm.func_set_natvie(Element.prototype.getAttribute)

Element.prototype.remove = function remove(){
    // debugger;
    return null;
};catchvm.func_set_natvie(Element.prototype.remove)


///////////////////////////////////////////////////////////////

Element.prototype.__proto__ = Node.prototype;

