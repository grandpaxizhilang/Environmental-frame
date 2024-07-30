var WebGLDebugRendererInfo = function WebGLDebugRendererInfo(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(WebGLDebugRendererInfo)
Object.defineProperties(WebGLDebugRendererInfo.prototype, {
    [Symbol.toStringTag]: {
        value: "WebGLDebugRendererInfo",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

WebGLDebugRendererInfo.prototype.UNMASKED_RENDERER_WEBGL = 37446
WebGLDebugRendererInfo.prototype.UNMASKED_VENDOR_WEBGL = 37445

///////////////////////////////////////////////////////////////

catchvm.memory.webGLDebugRendererInfo = {}
catchvm.memory.webGLDebugRendererInfo.__proto__ = WebGLDebugRendererInfo.prototype
catchvm.memory.webGLDebugRendererInfo = catchvm.proxy(catchvm.memory.webGLDebugRendererInfo)