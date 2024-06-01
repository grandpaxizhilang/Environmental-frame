var NavigatorManagedData = function NavigatorManagedData(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(NavigatorManagedData)
Object.defineProperties(NavigatorManagedData.prototype, {
    [Symbol.toStringTag]: {
        value: "NavigatorManagedData",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
NavigatorManagedData.prototype.onmanagedconfigurationchange = null

///////////////////////////////////////////////////////////////
NavigatorManagedData.prototype.__proto__ = EventTarget.prototype

catchvm.memory.managed = {}
catchvm.memory.managed.__proto__ = NavigatorManagedData.prototype
catchvm.memory.managed = catchvm.proxy(catchvm.memory.managed)

///////////////////////////////////////////////////////////////
NavigatorManagedData.prototype.__defineGetter__("onmanagedconfigurationchange",function(){
    throw TypeError("Illegal invocation")
})