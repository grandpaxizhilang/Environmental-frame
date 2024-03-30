var HTMLCanvasElement = function HTMLCanvasElement(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLCanvasElement)
Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});

HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;


catchvm.memory.HTMLElements['canvas'] = function(){
    var Canvas = new(function(){});
    ///////////////////////////////////////////////
    HTMLCanvasElement.prototype.height = 150;
    HTMLCanvasElement.prototype.width = 300;

    HTMLCanvasElement.prototype.getContext = function getContext(contextType){
        debugger;
    };catchvm.func_set_natvie(HTMLCanvasElement.prototype.getContext)

    ///////////////////////////////////////////////
    Canvas.__proto__ = HTMLCanvasElement.prototype;
    return Canvas;
}
