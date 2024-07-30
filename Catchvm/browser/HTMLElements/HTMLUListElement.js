var HTMLUListElement = function HTMLUListElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLUListElement)
Object.defineProperties(HTMLUListElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLUListElement",
        configurable: true
    }
});

HTMLUListElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['ul'] = function(){
    var ul = new(function(){});
    ///////////////////////////////////////////////
    ul.tagName = 'ul'.toUpperCase()
    ul.childelement = []
    ul.father_element = null

    ///////////////////////////////////////////////
    ul.__proto__ = HTMLUListElement.prototype;
    return ul;
}
