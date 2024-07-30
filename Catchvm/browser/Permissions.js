var Permissions = function Permissions(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Permissions)
Object.defineProperties(Permissions.prototype, {
    [Symbol.toStringTag]: {
        value: "Permissions",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.permissions = {}
catchvm.memory.permissions.__proto__ = Permissions.prototype
catchvm.memory.permissions = catchvm.proxy(catchvm.memory.permissions)




