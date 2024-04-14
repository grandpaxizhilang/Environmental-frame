var CanvasRenderingContext2D = function CanvasRenderingContext2D(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(CanvasRenderingContext2D)
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {
        value: "CanvasRenderingContext2D",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

CanvasRenderingContext2D.prototype.measureText = function measureText(text){
    debugger;
    return textMetrics;
};catchvm.func_set_natvie(CanvasRenderingContext2D.prototype.measureText);

CanvasRenderingContext2D.prototype.fillText = function fillText(){
    return undefined;
}
CanvasRenderingContext2D.prototype.arc = function arc(){
    // debugger;
}

CanvasRenderingContext2D.prototype.stroke = function stroke(){
    // debugger
}

///////////////////////////////////////////////////////////////

catchvm.memory.canvasRenderingContext2D = {};
catchvm.memory.canvasRenderingContext2D.__proto__ = CanvasRenderingContext2D.prototype;

catchvm.memory.canvasRenderingContext2D = catchvm.proxy(catchvm.memory.canvasRenderingContext2D);
