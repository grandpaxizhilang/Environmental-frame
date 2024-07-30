var ImageData = function ImageData(width, height){
    var imagedata = {};
    ////////////////////////////////////////////////
    imagedata.colorSpace = 'srgb';
    imagedata.data = [];
    imagedata.height = height;
    imagedata.width = width;
    ////////////////////////////////////////////////
    
    imagedata.__proto__ = ImageData.prototype;
    return catchvm.proxy(imagedata);

};catchvm.func_set_natvie(ImageData)
Object.defineProperties(ImageData.prototype, {
    [Symbol.toStringTag]: {
        value: "ImageData",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

ImageData.prototype.colorSpace = '';
ImageData.prototype.data = '';
ImageData.prototype.height = 0;
ImageData.prototype.width = 0;

for (let temp in ImageData.prototype) {
    if(!(typeof ImageData.prototype[temp] === 'function')){       
        ImageData.prototype.__defineGetter__(temp, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
};

///////////////////////////////////////////////////////////////


