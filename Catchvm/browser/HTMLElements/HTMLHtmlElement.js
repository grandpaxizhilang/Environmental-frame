var HTMLHtmlElement = function HTMLHtmlElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLHtmlElement)
Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHtmlElement",
        configurable: true
    }
});

HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['html'] = function(){
    var html = new(function(){});
    ///////////////////////////////////////////////
    html.tagName = 'html'.toUpperCase()
    html.childelement = []
    html.father_element = null

    ///////////////////////////////////////////////
    html.__proto__ = HTMLHtmlElement.prototype;
    return html;
}
