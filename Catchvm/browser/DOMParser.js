var DOMParser = function DOMParser(){
    return catchvm.memory.domParser()
};catchvm.func_set_natvie(DOMParser);
Object.defineProperties(DOMParser.prototype, {
    [Symbol.toStringTag]: {
        value: "DOMParser",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////

catchvm.memory.domParser = function(){
    var domParser = {};
    ////////////////////////////////////////////////

    
    /////////////////////////////////////////////////

    domParser.__proto__ = DOMParser.prototype;
    return catchvm.proxy(domParser);
};