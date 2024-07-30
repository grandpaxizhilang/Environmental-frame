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


location.href = 'https://www.nmpa.gov.cn/'
location.port = ''
location.hostname = 'www.nmpa.gov.cn'
location.host = 'www.nmpa.gov.cn'
location.protocol = 'https:'
location.search = ''
location.origin = 'https://www.nmpa.gov.cn'
location.hash = ''
location.pathname = '';



///////////////////////////////////////////////////////////////



location = catchvm.proxy(location);

Object.defineProperty(window, 'location', {
    configurable : false,
    enumerable: true
  });
