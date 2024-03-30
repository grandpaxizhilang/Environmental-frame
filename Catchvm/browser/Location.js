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


location.href = 'https://www.iwencai.com/unifiedmobile/?q=%E4%BB%8A%E6%97%A5%E9%AB%98%E5%BC%80&queryType=info#/result?question=%E4%BB%8A%E6%97%A5%E9%AB%98%E5%BC%80&queryType=info&token=&condition=&short_condition='
location.port = ''
location.hostname = 'www.iwencai.com'
location.host = 'www.iwencai.com'
location.protocol = 'https:'


///////////////////////////////////////////////////////////////



location = catchvm.proxy(location);