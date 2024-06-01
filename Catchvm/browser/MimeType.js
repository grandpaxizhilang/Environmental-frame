catchvm.memory.MimeType = {}

var MimeType = function MimeType(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(MimeType)
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
MimeType.prototype.description = '';
MimeType.prototype.suffixes = '';
MimeType.prototype.type = '';
MimeType.prototype.enabledPlugin = '';

for (let temp in MimeType.prototype) {
    if(!(typeof MimeType.prototype[temp] === 'function')){       
        MimeType.prototype.__defineGetter__(temp, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
};

///////////////////////////////////////////////////////////////

catchvm.memory.MimeType.new = function (data,plugin){
    var mimeType = {};
    if(data != undefined){
        mimeType.description = data.description;
        mimeType.suffixes = data.suffixes;
        mimeType.type = data.type;
        mimeType.enabledPlugin = plugin;
    };
    mimeType.__proto__ = MimeType.prototype;
    return mimeType;
};

///////////////////////////////////////////////////////////////
MimeType.prototype.__defineGetter__("description",function(){
    throw TypeError("Illegal invocation")
})
MimeType.prototype.__defineGetter__("suffixes",function(){
    throw TypeError("Illegal invocation")
})
MimeType.prototype.__defineGetter__("type",function(){
    throw TypeError("Illegal invocation")
})
MimeType.prototype.__defineGetter__("enabledPlugin",function(){
    throw TypeError("Illegal invocation")
})

