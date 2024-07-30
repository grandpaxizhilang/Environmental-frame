var HTMLLinkElement = function HTMLLinkElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLLinkElement)
Object.defineProperties(HTMLLinkElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLLinkElement",
        configurable: true
    }
});

HTMLLinkElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['link'] = function(){
    var link = new(function(){});
    ///////////////////////////////////////////////
    link.tagName = 'link'.toUpperCase()
    link.childelement = []
    link.father_element = null
    
    ///////////////////////////////////////////////
    link.__proto__ = HTMLLinkElement.prototype;
    return link;
}