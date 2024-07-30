var HTMLLIElement = function HTMLLabelElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLLIElement)
Object.defineProperties(HTMLLIElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLLIElement",
        configurable: true
    }
});

HTMLLIElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['li'] = function(){
    var li = new(function(){});
    ///////////////////////////////////////////////
    li.tagName = 'li'.toUpperCase()
    li.childelement = []
    li.father_element = null

    ///////////////////////////////////////////////
    li.__proto__ = HTMLLIElement.prototype;
    return li;
}