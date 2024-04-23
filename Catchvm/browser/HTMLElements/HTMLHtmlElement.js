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
    html.clientHeight = 726
    html.clientWidth = 1467
    

    ///////////////////////////////////////////////
    html.__proto__ = HTMLHtmlElement.prototype;
    return html;
}
