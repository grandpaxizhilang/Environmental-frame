var PluginArray = function PluginArray(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(PluginArray)

catchvm.memory.PluginArray.iterator = function values(){
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
};catchvm.func_set_natvie(catchvm.memory.PluginArray.iterator);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catchvm.memory.PluginArray.iterator,
        configurable: true
    }
});

///////////////////////////////////////////////////////////////
PluginArray.prototype.length = '';

PluginArray.prototype.item = function item(index){
    if(index == 4294967296){
        return navigator.plugins[0]
    }
    debugger;
    return this[index];
};catchvm.func_set_natvie(PluginArray.prototype.item)

PluginArray.prototype.namedItem = function namedItemem(key){
    debugger;
    return this[key];
};catchvm.func_set_natvie(PluginArray.prototype.namedItem)

PluginArray.prototype.refresh = function refresh(){
    debugger;
};catchvm.func_set_natvie(PluginArray.prototype.refresh)


PluginArray.prototype.__defineGetter__('length', function () {
    throw new TypeError("Illegal invocation");
});


///////////////////////////////////////////////////////////////

catchvm.memory.PluginArray._ = {};

if(catchvm.memory.PluginArray.temp != undefined){
    for(let i = 0;i<catchvm.memory.PluginArray.temp.length;i++){
        var plugindata = catchvm.memory.PluginArray.temp[i];
        var pa = catchvm.memory.plugin.new(plugindata);

        catchvm.memory.PluginArray._[i] = pa;
        Object.defineProperty(catchvm.memory.PluginArray._,pa.name,{
            value : pa
        });
    }
    catchvm.memory.PluginArray._.length = catchvm.memory.PluginArray.temp.length;
}

catchvm.memory.PluginArray._.__proto__ = PluginArray.prototype;
catchvm.memory.PluginArray._ =  catchvm.proxy(catchvm.memory.PluginArray._);

