var MouseEvent = function MouseEvent(type){
    return catchvm.memory.Events['mouseevent'](type);
};catchvm.func_set_natvie(MouseEvent);
Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "MouseEvent",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

MouseEvent.prototype.screenX = 0;
MouseEvent.prototype.screenY = 0;
MouseEvent.prototype.clientX = 0;
MouseEvent.prototype.clientY = 0;

///////////////////////////////////////////////////////////////

MouseEvent.prototype.__proto__ = UIEvent.prototype;

catchvm.memory.Events['mouseevent'] = function(type){
    var mouseevent = {};
    ////////////////////////////////////////////////
    if(type != undefined){
        mouseevent.type = type;
    }else{
        mouseevent.type = ''
    }
    mouseevent.screenX = 0;
    mouseevent.screenY = 0;
    mouseevent.clientX = 0;
    mouseevent.clientY = 0;
    /////////////////////////////////////////////////
    mouseevent.__proto__ = MouseEvent.prototype;
    return catchvm.proxy(mouseevent);
};

catchvm.memory.Events['mouseevents'] = function(type){
    return catchvm.memory.Events['mouseevent'](type);
};

///////////////////////////////////////////////////////////////
// MouseEvent.prototype.__defineGetter__("screenX",function(){
//     throw TypeError("Illegal invocation")
// })
// MouseEvent.prototype.__defineGetter__("screenY",function(){
//     throw TypeError("Illegal invocation")
// })
// MouseEvent.prototype.__defineGetter__("clientX",function(){
//     throw TypeError("Illegal invocation")
// })
// MouseEvent.prototype.__defineGetter__("clientY",function(){
//     throw TypeError("Illegal invocation")
// })