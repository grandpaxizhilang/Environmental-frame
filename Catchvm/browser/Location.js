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


location.href = 'http://www.fangdi.com.cn/new_house/new_house.html'
location.port = ''
location.hostname = 'www.fangdi.com.cn'
location.host = 'www.jd.com'
location.protocol = 'https:'
location.search = '?response_code=09cb068826d14d66917bd1a0a41c58e7&request_code=ba8d9014004e44128f1d960c4c30c3ea&response_code=c46349190b694388ad771ff254262d88&request_code=dd5e51a4a12e46d9a1010c40d372af20&response_code=416df7e74b4b4b739bcbe8f393869bed&request_code=0d62e806153446369b9e412d8401031b&response_code=606d6001a0fc4a19b20d1818b4f958b3&request_code=ce521020f89d411d869eab084ea4f8fb&response_code=10914cebbc794755b31fb51a5cfdae49&request_code=aab5413a99c244e3ab573733ac6ba889'
location.origin = 'http://www.fangdi.com.cn'



//网站自己新定义的方法和属性(可删除)↓↓↓↓↓↓↓↓↓↓
location.pathname = '';

//网站自己新定义的方法和属性(可删除)↑↑↑↑↑↑↑↑↑↑




///////////////////////////////////////////////////////////////



location = catchvm.proxy(location);

Object.defineProperty(window, 'location', {
    configurable : false,
    enumerable: true
  });
