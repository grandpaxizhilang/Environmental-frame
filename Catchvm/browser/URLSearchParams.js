var URLSearchParams = function URLSearchParams(options){
    return catchvm.memory.URLSearchParams(options);
};catchvm.func_set_natvie(URLSearchParams);
Object.defineProperties(URLSearchParams.prototype, {
    [Symbol.toStringTag]: {
        value: "URLSearchParams",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////

catchvm.memory.URLSearchParams = function(options){
    var urlSearchParams = {};
    ////////////////////////////////////////////////


    /////////////////////////////////////////////////

    urlSearchParams.__proto__ = URLSearchParams.prototype;
    return catchvm.proxy(urlSearchParams);
};