var Option = function Option(){
    debugger;
    if(catchvm.memory.HTMLElements['option'] == 'undefined'){
        debugger;
    }
    return catchvm.proxy(catchvm.memory.HTMLElements['option']())
};catchvm.func_set_natvie(Option)
Object.defineProperties(Option.prototype, {
    [Symbol.toStringTag]: {
        value: "Option",
        configurable: true
    }
});