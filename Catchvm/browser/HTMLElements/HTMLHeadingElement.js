var HTMLHeadingElement = function HTMLHeadingElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLHeadingElement)
Object.defineProperties(HTMLHeadingElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHeadingElement",
        configurable: true
    }
});

HTMLHeadingElement.prototype.__proto__ = HTMLElement.prototype;

catchvm.memory.HTMLElements['h1'] = function(){
    var h1 = new(function(){});
    ///////////////////////////////////////////////
    h1.tagName = 'h1'.toUpperCase()
    h1.childelement = []
    h1.father_element = null

    ///////////////////////////////////////////////
    h1.__proto__ = HTMLHeadingElement.prototype;
    return h1;
}

catchvm.memory.HTMLElements['h2'] = function(){
    var h2 = new(function(){});
    ///////////////////////////////////////////////
    h2.tagName = 'h2'.toUpperCase()
    h2.childelement = []
    h2.father_element = null

    ///////////////////////////////////////////////
    h2.__proto__ = HTMLHeadingElement.prototype;
    return h2;
}

catchvm.memory.HTMLElements['h3'] = function(){
    var h3 = new(function(){});
    ///////////////////////////////////////////////
    h3.tagName = 'h3'.toUpperCase()
    h3.childelement = []
    h3.father_element = null

    ///////////////////////////////////////////////
    h3.__proto__ = HTMLHeadingElement.prototype;
    return h3;
}

catchvm.memory.HTMLElements['h4'] = function(){
    var h4 = new(function(){});
    ///////////////////////////////////////////////
    h4.tagName = 'h4'.toUpperCase()
    h4.childelement = []
    h4.father_element = null

    ///////////////////////////////////////////////
    h4.__proto__ = HTMLHeadingElement.prototype;
    return h4;
}

catchvm.memory.HTMLElements['h5'] = function(){
    var h5 = new(function(){});
    ///////////////////////////////////////////////
    h5.tagName = 'h5'.toUpperCase()
    h5.childelement = []
    h5.father_element = null

    ///////////////////////////////////////////////
    h5.__proto__ = HTMLHeadingElement.prototype;
    return h5;
}

catchvm.memory.HTMLElements['h6'] = function(){
    var h6 = new(function(){});
    ///////////////////////////////////////////////
    h6.tagName = 'h6'.toUpperCase()
    h6.childelement = []
    h6.father_element = null

    ///////////////////////////////////////////////
    h6.__proto__ = HTMLHeadingElement.prototype;
    return h6;
}

