
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



window.top = {}
window.self = window

window.outerHeight = 834;
window.outerWidth = 1536;
window.innerWidth = 1482;
window.innerHeight = 726;
window.screenX = 0;
window.screenY = 0
window.pageYOffset = 0;
window.devicePixelRatio = 1.25;
window.chrome = catchvm.proxy(class chrome{})
window.name = ''
window.screenTop = 0
window.screenLeft = 0
window.length = 2
window.fetchHooked = true
window.wDomains = ["appsec-mobile.sec.test.sankuai.com","appsec-mobile.meituan.com","msp.meituan.com","pikachu.mykeeta.com"]
window.wPaths = []
window.xhrHooked = true
window.xhrHook = true

window[0] = window

//↓↓↓↓↓↓↓↓↓↓↓↓↓可删↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

window.onwheelx = {"_Ax": "0X21"}

//↑↑↑↑↑↑↑↑↑↑↑↑↑可删↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


window.SVGUnitTypes = function SVGUnitTypes(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGUnitTypes)

window.SVGNumber = function SVGNumber(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGNumber)

window.SVGGElement = function SVGGElement(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGGElement)

window.NodeFilter = function NodeFilter(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.NodeFilter)

window.CSSPageRule = function CSSPageRule(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.CSSPageRule)

window.SVGPointList = function SVGPointList(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGPointList)

window.SVGMatrix = function SVGMatrix(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGMatrix)

window.SVGAngle = function SVGAngle(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGAngle)

window.MediaError = function MediaError(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.MediaError)

window.SVGRect = function SVGRect(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGRect)

window.SVGElement = function SVGElement(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.SVGElement)



window.alert = function alert(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(window.alert)
// window.CHAMELEON_LOADED = true;

window.fetch = function fetch(){
    debugger;
};catchvm.func_set_natvie(window.fetch);
window.requestAnimationFrame = function requestAnimationFrame(){
    debugger;
    return 
};catchvm.func_set_natvie(window.requestAnimationFrame);

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













