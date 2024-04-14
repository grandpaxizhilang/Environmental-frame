
window = this;
delete global;
delete Buffer;

var Window = function Window(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Window)
Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});

///////////////////////////////////////////////////////////////


window.setTimeout = function setTimeout(){
    // x有可能是方法，也有可能是文本
    typeof(x) === 'function'?x():undefined;
    typeof(x) === 'string'?x():undefined;
    //正确的应该 生成uuid（每个id都不一样） 并且保存到内存中
    return 0;
};catchvm.func_set_natvie(window.setTimeout)

window.setInterval = function setInterval(x,y){
    return x();
};catchvm.func_set_natvie(window.setInterval)

window.clearTimeout = function clearTimeout(id){
    debugger;
};catchvm.func_set_natvie(window.clearTimeout)


Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;




window.outerHeight = 834;
window.outerWidth = 1536;
window.innerWidth = 0;
window.innerHeight = 0;
window.devicePixelRatio = 1.25;
window.chrome = catchvm.proxy(class chrome{})
window.name = ''





window.alert = function alert(){
    debugger;
    console.log(arguments)
};catchvm.func_set_natvie(window.alert)
// window.CHAMELEON_LOADED = true;



window.CSSRule = function CSSRule(){
    debugger;
};catchvm.func_set_natvie(window.CSSRule);
window.DeviceOrientationEvent = function DeviceOrientationEvent(){
    debugger;
};catchvm.func_set_natvie(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent(){
    debugger;
};catchvm.func_set_natvie(window.DeviceMotionEvent);


///////////////////////////////////////////////////////////////

Window.prototype.__proto__ = WindowProperties.prototype
window.__proto__ = Window.prototype;


window = catchvm.proxy(window)













