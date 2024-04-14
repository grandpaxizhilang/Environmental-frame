var HTMLIFrameElement = function HTMLIFrameElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLIFrameElement)
Object.defineProperties(HTMLIFrameElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLIFrameElement",
        configurable: true
    }
});

HTMLIFrameElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['iframe'] = function(){
    var iframe = new(function(){});
    ///////////////////////////////////////////////
    iframe.tagName = 'iframe'.toUpperCase()
    iframe.childelement = []
    iframe.father_element = null

    ///////////////////////////////////////////////
    iframe.__proto__ = HTMLIFrameElement.prototype;
    return iframe;
}
