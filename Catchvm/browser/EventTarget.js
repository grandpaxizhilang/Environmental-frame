var EventTarget = function EventTarget(){
    
};catchvm.func_set_natvie(EventTarget)
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget", 
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

EventTarget.prototype.addEventListener = function addEventListener(type,listener){
    console.log(arguments)
    // debugger;
    if(catchvm.memory.listeners[type] === undefined){
        catchvm.memory.listeners[type] = [];
    }
    if(catchvm.memory.listeners[type].indexOf(listener) === -1){
        catchvm.memory.listeners[type].push(listener);
    }
};catchvm.func_set_natvie(EventTarget.prototype.addEventListener);

EventTarget.prototype.dispatchEvent = function dispatchEvent(event){
    debugger;
    if (event.type in catchvm.memory.listeners) {
        let stack = catchvm.memory.listeners[event.type];
        event.target = this;
        stack.forEach(callback => {
            callback.call(this,event);
        })
    }

};catchvm.func_set_natvie(EventTarget.prototype.dispatchEvent);

EventTarget.prototype.removeEventListener = function removeEventListener(type,callback){
    debugger;
    if (type in catchvm.memory.listeners) {
        let stack = catchvm.memory.listeners[type];
        let index = stack.indexOf(callback);
        console.log(index);
        //可能会添加多个
        while (index !== -1) {
            stack.splice(index, 1);
            index = stack.indexOf(callback);
        }
    }
};catchvm.func_set_natvie(EventTarget.prototype.removeEventListener);

///////////////////////////////////////////////////////////////
