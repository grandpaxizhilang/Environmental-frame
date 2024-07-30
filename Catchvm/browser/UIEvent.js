var UIEvent = function UIEvent(type){
    return catchvm.memory.Events['uievent'](type);
};catchvm.func_set_natvie(UIEvent);
Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "UIEvent",
        configurable: true
    }
});

///////////////////////////////////////////////////////////////
UIEvent.prototype.view = null;
UIEvent.prototype.detail = 0;
UIEvent.prototype.which = 0;



///////////////////////////////////////////////////////////////
UIEvent.prototype.__proto__ = Event.prototype;

catchvm.memory.Events['uievent'] = function(type){
    var uievent = {};
    ////////////////////////////////////////////////
    if(type != undefined){
        uievent.type = type;
    }else{
        uievent.type = ''
    }

    /////////////////////////////////////////////////
    uievent.__proto__ = UIEvent.prototype;
    return catchvm.proxy(uievent);
};

catchvm.memory.Events['uievents'] = function(type){
    return catchvm.memory.Events['uievent'](type);
};

