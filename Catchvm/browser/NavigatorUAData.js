var NavigatorUAData = function NavigatorUAData(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(NavigatorUAData)
Object.defineProperties(NavigatorUAData.prototype, {
    [Symbol.toStringTag]: {
        value: "NavigatorUAData",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
NavigatorUAData.prototype.mobile = false
NavigatorUAData.prototype.platform = 'windows'
NavigatorUAData.prototype.brands = {}
///////////////////////////////////////////////////////////////


catchvm.memory.userAgentData = {}
catchvm.memory.userAgentData.__proto__ = NavigatorUAData.prototype
catchvm.memory.userAgentData = catchvm.proxy(catchvm.memory.userAgentData)


///////////////////////////////////////////////////////////////
// NavigatorUAData.prototype.__defineGetter__("mobile",function(){
//     throw TypeError("Illegal invocation")
// })
// NavigatorUAData.prototype.__defineGetter__("platform",function(){
//     throw TypeError("Illegal invocation")
// })
// NavigatorUAData.prototype.__defineGetter__("brands",function(){
//     throw TypeError("Illegal invocation")
// })

