var WebGL2RenderingContext = function WebGL2RenderingContext(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(WebGL2RenderingContext)
Object.defineProperties(WebGL2RenderingContext.prototype, {
    [Symbol.toStringTag]: {
        value: "WebGL2RenderingContext",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////

catchvm.memory.webGL2RenderingContext = {}
catchvm.memory.webGL2RenderingContext.__proto__ = WebGL2RenderingContext.prototype
catchvm.memory.webGL2RenderingContext = catchvm.proxy(catchvm.memory.webGL2RenderingContext)