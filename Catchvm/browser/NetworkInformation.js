var NetworkInformation = function NetworkInformation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(NetworkInformation)
Object.defineProperties(NetworkInformation.prototype, {
    [Symbol.toStringTag]: {
        value: "NetworkInformation",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
NetworkInformation.prototype.downlink = 10
NetworkInformation.prototype.effectiveType = '4g'
NetworkInformation.prototype.onchange = null
NetworkInformation.prototype.rtt = 50
NetworkInformation.prototype.saveData = false


///////////////////////////////////////////////////////////////

NetworkInformation.prototype.__proto__ = EventTarget.prototype

catchvm.memory.connection = {}

catchvm.memory.connection.type = 'Wifi'

catchvm.memory.connection.__proto__ = NetworkInformation.prototype
catchvm.memory.connection = catchvm.proxy(catchvm.memory.connection)


///////////////////////////////////////////////////////////////
NetworkInformation.prototype.__defineGetter__("downlink",function(){
    throw TypeError("Illegal invocation")
})
NetworkInformation.prototype.__defineGetter__("effectiveType",function(){
    throw TypeError("Illegal invocation")
})
NetworkInformation.prototype.__defineGetter__("onchange",function(){
    throw TypeError("Illegal invocation")
})
NetworkInformation.prototype.__defineGetter__("rtt",function(){
    throw TypeError("Illegal invocation")
})
NetworkInformation.prototype.__defineGetter__("saveData",function(){
    throw TypeError("Illegal invocation")
})