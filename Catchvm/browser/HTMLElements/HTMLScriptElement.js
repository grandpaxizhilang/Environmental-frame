
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
  
    
    
    ///////////////////////////////////////////////
    script.__proto__ = HTMLDivElement.prototype;
    return script;
}
