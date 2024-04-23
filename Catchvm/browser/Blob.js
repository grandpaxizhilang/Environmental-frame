var Blob = function Blob(array=[], options=''){
    return catchvm.memory.Blob(array, options)
};catchvm.func_set_natvie(Blob);
Object.defineProperties(Blob.prototype, {
    [Symbol.toStringTag]: {
        value: "Blob",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Blob.prototype.size = ''
Blob.prototype.type = ''


///////////////////////////////////////////////////////////////

catchvm.memory.Blob = function(array=[], options=''){
    var blob = {};
    ////////////////////////////////////////////////
    if(array !== undefined){
        blob.size = array.length
    }else{
        blob.size = 0
    }

    if(options !== ''){
        blob.type = options['type']
    }else{
        blob.type = ''
    }

    /////////////////////////////////////////////////
    blob.__proto__ = Blob.prototype;
    return catchvm.proxy(blob);
};
