var XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(XMLHttpRequestEventTarget)
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequestEventTarget",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////

XMLHttpRequestEventTarget.prototype.__proto__ = EventTarget.prototype;