var TextMetrics = function TextMetrics(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(TextMetrics)
Object.defineProperties(TextMetrics.prototype, {
    [Symbol.toStringTag]: {
        value: "TextMetrics",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

TextMetrics.prototype.width = 16;
TextMetrics.prototype.actualBoundingBoxAscent = '';
TextMetrics.prototype.actualBoundingBoxDescent = '';
TextMetrics.prototype.actualBoundingBoxLeft = '';
TextMetrics.prototype.alphabeticBaseline = '';
TextMetrics.prototype.fontBoundingBoxAscent = '';
TextMetrics.prototype.fontBoundingBoxDescent = '';
TextMetrics.prototype.hangingBaseline = '';
TextMetrics.prototype.ideographicBaseline = '';


///////////////////////////////////////////////////////////////

var textMetrics = {};
textMetrics.__proto__ = TextMetrics.prototype;

textMetrics = catchvm.proxy(textMetrics);