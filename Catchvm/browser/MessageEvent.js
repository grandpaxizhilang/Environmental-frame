var MessageEvent = function MessageEvent(type, init){
    return catchvm.memory.MessageEvent(type, init)
};catchvm.func_set_natvie(MessageEvent);
Object.defineProperties(MessageEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "MessageEvent",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
MessageEvent.prototype.__proto__ = Event.prototype

catchvm.memory.MessageEvent = function(type, init){
    console.log(arguments)
    debugger;
    var messageEvent = {};
    ////////////////////////////////////////////////
    messageEvent.type = type

    /////////////////////////////////////////////////
    messageEvent.__proto__ = MessageEvent.prototype;
    return catchvm.proxy(messageEvent);
};