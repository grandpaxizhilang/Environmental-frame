var CDATASection = function CDATASection(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(CDATASection)
Object.defineProperties(CDATASection.prototype, {
    [Symbol.toStringTag]: {
        value: "CDATASection",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
CDATASection.prototype.__proto__ = Text.prototype
