var MimeTypeArray = function MimeTypeArray(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(MimeTypeArray)

catchvm.memory.MimeTypeArray.iterator = function values(){
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
};catchvm.func_set_natvie(catchvm.memory.MimeTypeArray.iterator);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catchvm.memory.MimeTypeArray.iterator,
        configurable: true
    }
});

///////////////////////////////////////////////////////////////
MimeTypeArray.prototype.length = '';

MimeTypeArray.prototype.item = function item(index){
    debugger;
    return this[index];
};;catchvm.func_set_natvie(MimeTypeArray.prototype.item)
MimeTypeArray.prototype.namedItem = function namedItemem(key){
    debugger;
    return this[key];
};catchvm.func_set_natvie(MimeTypeArray.prototype.namedItem)

///////////////////////////////////////////////////////////////

catchvm.memory.MimeTypeArray._ = {};

if(catchvm.memory.PluginArray._ != undefined){
    var count = 0;
    for(let i = 0;i < catchvm.memory.PluginArray._.length;i++){
        var mimeArray = catchvm.memory.PluginArray._[i];
        for(let k = 0;k < mimeArray.length;k++){
            if(catchvm.memory.MimeTypeArray._[mimeArray[k].type] == undefined){
                catchvm.memory.MimeTypeArray._[count] = mimeArray[k];
                Object.defineProperty(catchvm.memory.MimeTypeArray._,mimeArray[k].type,{
                    value : mimeArray[k]
                });
                count++;
            }       
        }  
    }
    catchvm.memory.MimeTypeArray._.length = count;
}

catchvm.memory.MimeTypeArray._.__proto__ = MimeTypeArray.prototype
catchvm.memory.MimeTypeArray._ =  catchvm.proxy(catchvm.memory.MimeTypeArray._);

///////////////////////////////////////////////////////////////
MimeTypeArray.prototype.__defineGetter__('length', function () {
    throw new TypeError("Illegal invocation");
});