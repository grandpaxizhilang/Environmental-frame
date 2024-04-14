var WebGLRenderingContext = function WebGLRenderingContext(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(WebGLRenderingContext)
Object.defineProperties(WebGLRenderingContext.prototype, {
    [Symbol.toStringTag]: {
        value: "WebGLRenderingContext",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

WebGLRenderingContext.prototype.getExtension = function getExtension(name){
    if(name == 'WEBGL_debug_renderer_info'){
        return catchvm.memory.webGLDebugRendererInfo
    }
    console.log(arguments)
    debugger;
    return null
}

WebGLRenderingContext.prototype.getParameter = function getParameter(pname){
    if(pname == 37445){
        return 'Google Inc. (AMD)'
    }
    if(pname == 37446){
        return 'ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001636) Direct3D11 vs_5_0 ps_5_0, D3D11)'
    }
    console.log(arguments)
    debugger;
    return null
}





///////////////////////////////////////////////////////////////

catchvm.memory.webGLRenderingContext = {}
catchvm.memory.webGLRenderingContext.__proto__ = WebGLRenderingContext.prototype
catchvm.memory.webGLRenderingContext = catchvm.proxy(catchvm.memory.webGLRenderingContext)


