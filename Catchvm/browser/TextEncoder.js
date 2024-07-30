var TextEncoder = function TextEncoder(){
    return catchvm.memory.TextEncoder()
};catchvm.func_set_natvie(TextEncoder);
Object.defineProperties(TextEncoder.prototype, {
    [Symbol.toStringTag]: {
        value: "TextEncoder",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
TextEncoder.prototype.encode = function encode(str){
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        else {
            i++;
            charcode = 0x10000 + (((charcode & 0x3ff)<<10) | (str.charCodeAt(i) & 0x3ff))
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return new Uint8Array(utf8);
}


///////////////////////////////////////////////////////////////
catchvm.memory.TextEncoder = function(){
    var textEncoder = {};
    ////////////////////////////////////////////////
    textEncoder.encoding = 'utf-8'

    /////////////////////////////////////////////////
    textEncoder.__proto__ = TextEncoder.prototype;
    return catchvm.proxy(textEncoder);
};
