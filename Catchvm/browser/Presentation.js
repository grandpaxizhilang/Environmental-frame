var Presentation = function Presentation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Presentation)
Object.defineProperties(Presentation.prototype, {
    [Symbol.toStringTag]: {
        value: "Presentation",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Presentation.prototype.defaultRequest = null
Presentation.prototype.receiver = null
///////////////////////////////////////////////////////////////
catchvm.memory.presentation = {}
catchvm.memory.presentation.__proto__ = Presentation.prototype
catchvm.memory.presentation = catchvm.proxy(catchvm.memory.presentation)





