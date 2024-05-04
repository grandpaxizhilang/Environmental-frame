var HTMLMetaElement  = function HTMLMetaElement (){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLMetaElement )
Object.defineProperties(HTMLMetaElement .prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLMetaElement ",
        configurable: true
    }
});

HTMLMetaElement .prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['meta'] = function(){
    var meta = new(function(){});
    ///////////////////////////////////////////////
    meta.tagName = 'meta'.toUpperCase()
    meta.childelement = []
    meta.father_element = null
    meta.content = ''
    meta.parentNode = ''

    ///////////////////////////////////////////////
    meta.__proto__ = HTMLMetaElement .prototype;
    return meta;
}