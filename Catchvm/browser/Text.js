var Text = function Text(string){
    return catchvm.memory.Text(string);
};catchvm.func_set_natvie(Text);
Object.defineProperties(Text.prototype, {
    [Symbol.toStringTag]: {
        value: "Text",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
Text.prototype.__proto__ = CharacterData.prototype

catchvm.memory.Text = function(string){
    var text = {};
    ////////////////////////////////////////////////
    text.nodeValue = string

    /////////////////////////////////////////////////
    text.__proto__ = Text.prototype;
    return catchvm.proxy(text);
};


