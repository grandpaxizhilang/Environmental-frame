catchvm.memory.plugin = {};

var Plugin = function Plugin(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Plugin)

catchvm.memory.plugin.iterator = function values(){
    debugger;
    return {
        next:function(){
            if(this.index_ == undefined){
                this.index_ = 0;
            }
            var temp = this.self_[this.index_];
            this.index_++;
            if(temp == undefined){
                return{
                    done:true,
                    value:temp
                }
            }else{
                return{
                    done:false,
                    value:temp
                }
            }
            
        },
        self_:this
    }
};catchvm.func_set_natvie(catchvm.memory.plugin.iterator);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catchvm.memory.plugin.iterator,
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Plugin.prototype.description = '';
Plugin.prototype.filename = '';
Plugin.prototype.length = '';
Plugin.prototype.name = '';

Plugin.prototype.item = function item(index){
    // debugger;
    return this[index];
};catchvm.func_set_natvie(Plugin.prototype.item);

Plugin.prototype.namedItem = function namedItem(key){
    debugger;
    return this[key];
};catchvm.func_set_natvie(Plugin.prototype.namedItem);

for (let temp in Plugin.prototype) {
    if(!(typeof Plugin.prototype[temp] === 'function')){       
        Plugin.prototype.__defineGetter__(temp, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
}

///////////////////////////////////////////////////////////////

catchvm.memory.plugin.new = function (data){
    plugin = {};
    if(data != undefined){
        plugin.description = data.description;
        plugin.filename = data.filename
        plugin.name = data.name
        // MimeType 
        for(let mtindex = 0;mtindex < data.MimeTypes.length;mtindex++){
            var mimetype = data.MimeTypes[mtindex];
            var mt = catchvm.memory.MimeType.new(mimetype,plugin);

            plugin[mtindex] = mt;
            Object.defineProperty(plugin,mt.type,{
                value : mt
            })
        }
        plugin.length = data.MimeTypes.length;
    };

    plugin.__proto__ = Plugin.prototype;
    return plugin;
}


///////////////////////////////////////////////////////////////
Plugin.prototype.__defineGetter__("description",function(){
    throw TypeError("Illegal invocation")
})
Plugin.prototype.__defineGetter__("filename",function(){
    throw TypeError("Illegal invocation")
})
Plugin.prototype.__defineGetter__("length",function(){
    throw TypeError("Illegal invocation")
})
Plugin.prototype.__defineGetter__("name",function(){
    throw TypeError("Illegal invocation")
})





