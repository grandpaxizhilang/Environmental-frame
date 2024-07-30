var DataTransfer = function DataTransfer(){
    return catchvm.memory.DataTransfer()
};catchvm.func_set_natvie(DataTransfer);
Object.defineProperties(DataTransfer.prototype, {
    [Symbol.toStringTag]: {
        value: "DataTransfer",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////

catchvm.memory.DataTransfer = function(){
    var dataTransfer = {};
    ////////////////////////////////////////////////
    
    
    /////////////////////////////////////////////////

    dataTransfer.__proto__ = DataTransfer.prototype;
    return catchvm.proxy(dataTransfer);
};
