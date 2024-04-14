
//此接口待开发，目前不会实现

var DOMException = function DOMException(message){
    var dOMException = new Error(message)
    dOMException.name = 'DOMException'
    return dOMException
};catchvm.func_set_natvie(DOMException)
Object.defineProperties(DOMException.prototype, {
    [Symbol.toStringTag]: {
        value: "DOMException",
        configurable: true
    }
});

///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
