var Image = function Image(width, height){
    // debugger;
    if(catchvm.memory.HTMLElements['image'] == 'undefined'){
        debugger;
    }
    return catchvm.proxy(catchvm.memory.HTMLElements['image'](width, height))
};catchvm.func_set_natvie(Image)
Object.defineProperties(Image.prototype, {
    [Symbol.toStringTag]: {
        value: "Image",
        configurable: true
    }
});
