var Storage = function Storage(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Storage);
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

Storage.prototype.length = 0;
Storage.prototype.clear = function clear(){
    debugger;
    let temp = Object.keys(this)
    for(var i = 0;i < temp.length;i++){
        delete this[temp[i]]
    }
};catchvm.func_set_natvie(Storage.prototype.clear);

Storage.prototype.getItem = function getItem(k){
    debugger;
    return this[k];
};catchvm.func_set_natvie(Storage.prototype.getItem);

Storage.prototype.key = function key(index){
    debugger;
    return Object.keys(this)[index];
};catchvm.func_set_natvie(Storage.prototype.key);

Storage.prototype.removeItem = function removeItem(k){
    debugger;
    delete this[k];
};catchvm.func_set_natvie(Storage.prototype.removeItem);

Storage.prototype.setItem = function setItem(k,v){
    debugger;
    this[k] = v;
};catchvm.func_set_natvie(Storage.prototype.setItem);


//////可能会被检测
Storage.prototype.__defineGetter__('length', function length() {
    return Object.keys(this).length;
});


///////////////////////////////////////////////////////////////

localStorage = {};
localStorage.__proto__ = Storage.prototype;

sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;


localStorage = catchvm.proxy(localStorage);
sessionStorage = catchvm.proxy(sessionStorage);