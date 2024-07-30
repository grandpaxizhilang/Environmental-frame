
var HTMLScriptElement = function HTMLScriptElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLScriptElement)
Object.defineProperties(HTMLScriptElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLScriptElement",
        configurable: true
    }
});

HTMLScriptElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['script'] = function(){
    var script = new(function(){});
    ///////////////////////////////////////////////
    script.tagName = 'script'.toUpperCase()
    script.childelement = []
    script.father_element = null
    script.type = "text/javascript"
    script.r = 'm'
    script.charset = "utf-8"
    script.scr = "/NJDrTcXo8msX/q6etnJaJUcHH.294cc83.js"


    ///////////////////////////////////////////////
    script.__proto__ = HTMLScriptElement.prototype;
    return script;
}
 