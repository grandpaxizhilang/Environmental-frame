var UIEvent = function UIEvent(type){
    var UIevent = new (function(){});
    UIevent.__proto__ = UIEvent.prototype;
    UIevent.type = type;
    return catchvm.proxy(UIevent);
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


