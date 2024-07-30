var TextDecoder = function TextDecoder(utfLabel = 'utf-8', options){
    return catchvm.memory.TextDecoder(utfLabel, options)
};catchvm.func_set_natvie(TextDecoder);
Object.defineProperties(TextDecoder.prototype, {
    [Symbol.toStringTag]: {
        value: "TextDecoder",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
TextDecoder.prototype.decode = function decode(buffer, options){
    console.log(arguments)
    // debugger;
    return undefined;
};catchvm.func_set_natvie(TextDecoder.prototype.decode);


///////////////////////////////////////////////////////////////
catchvm.memory.TextDecoder = function(utfLabel = 'utf-8', options){
    var textDecoder = {};
    ////////////////////////////////////////////////
    //这里有编码限制，如果不是正确的编码需要报错
    textDecoder.encoding = utfLabel

    /////////////////////////////////////////////////
    textDecoder.__proto__ = TextDecoder.prototype;
    return catchvm.proxy(textDecoder);
};

