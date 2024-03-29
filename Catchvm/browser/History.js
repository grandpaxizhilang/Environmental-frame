var History = function History(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(History)
Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
History.prototype.back = function back(){
    debugger;
};catchvm.func_set_natvie(History.prototype.back)



///////////////////////////////////////////////////////////////

history = {};
history.__proto__ = History.prototype;

history = catchvm.proxy(history);
