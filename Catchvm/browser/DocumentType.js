var DocumentType = function DocumentType(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(DocumentType)
Object.defineProperties(DocumentType.prototype, {
    [Symbol.toStringTag]: {
        value: "DocumentType",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
DocumentType.prototype.__proto__ = Node.prototype