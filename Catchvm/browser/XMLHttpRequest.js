var XMLHttpRequest = function XMLHttpRequest(){
    
    // return catchvm.proxy(XMLHttpRequest);
};catchvm.func_set_natvie(XMLHttpRequest);
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
XMLHttpRequest.prototype.open = function open(method,url,async = true,user = '',password = ''){
    // debugger;
    this.method = method;
    this.url = url;
    this.async = async;
    this.user = user;
    this.password = password;
};catchvm.func_set_natvie(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function send(body = null){
    this.body = body;
    // debugger;
};catchvm.func_set_natvie(XMLHttpRequest.prototype.open);



///////////////////////////////////////////////////////////////

// XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
