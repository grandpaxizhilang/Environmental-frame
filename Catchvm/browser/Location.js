var Location = function Location(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Location)
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
location = {};
location.__proto__ = Location.prototype;


location.href = 'https://www.dianping.com/shop/H50rbizoCjKWUIGX?response_code=09cb068826d14d66917bd1a0a41c58e7&request_code=ba8d9014004e44128f1d960c4c30c3ea&response_code=c46349190b694388ad771ff254262d88&request_code=dd5e51a4a12e46d9a1010c40d372af20&response_code=416df7e74b4b4b739bcbe8f393869bed&request_code=0d62e806153446369b9e412d8401031b'
location.port = ''
location.hostname = 'www.dianping.com'
location.host = 'www.dianping.com'
location.protocol = 'https:'
location.search = 

//网站自己新定义的方法和属性(可删除)↓↓↓↓↓↓↓↓↓↓
location.pathname = '';

//网站自己新定义的方法和属性(可删除)↑↑↑↑↑↑↑↑↑↑




///////////////////////////////////////////////////////////////



location = catchvm.proxy(location);