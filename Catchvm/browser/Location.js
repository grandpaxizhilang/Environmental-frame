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


location.href = 'https://www.toutiao.com/?wid=1713081298266'
location.port = ''
location.hostname = ''
location.host = 'www.xiaohongshu.com'
location.protocol = 'https:'
location.search = 

//网站自己新定义的方法和属性(可删除)↓↓↓↓↓↓↓↓↓↓
location.pathname = '';

//网站自己新定义的方法和属性(可删除)↑↑↑↑↑↑↑↑↑↑




///////////////////////////////////////////////////////////////



location = catchvm.proxy(location);