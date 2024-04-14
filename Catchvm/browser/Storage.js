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

Storage.prototype['hexin-v'] = NaN;

Storage.prototype.length = 0;
Storage.prototype.clear = function clear(){
    debugger;
    let temp = Object.keys(this)
    for(var i = 0;i < temp.length;i++){
        delete this[temp[i]]
    }
};catchvm.func_set_natvie(Storage.prototype.clear);

Storage.prototype.getItem = function getItem(k){
    console.log(arguments)
    // debugger;
    return this[k];
};catchvm.func_set_natvie(Storage.prototype.getItem);

Storage.prototype.key = function key(index){
    console.log(arguments)
    // debugger;
    return Object.keys(this)[index];
};catchvm.func_set_natvie(Storage.prototype.key);

Storage.prototype.removeItem = function removeItem(k){
    console.log(arguments)
    // debugger;
    delete this[k];
};catchvm.func_set_natvie(Storage.prototype.removeItem);

Storage.prototype.setItem = function setItem(k,v){
    console.log(arguments)
    // debugger;
    this[k] = v;
};catchvm.func_set_natvie(Storage.prototype.setItem);


//////可能会被检测
Storage.prototype.__defineGetter__('length', function length() {
    return Object.keys(this).length;
});


///////////////////////////////////////////////////////////////

localStorage = {};
localStorage._c_f2 = 'cd4b9d6d851982137835cd15deb8d341cjcp'
localStorage._dev_ha = 'dcdd5770c63deb47e35549150a89ba93'
localStorage.sdt_source_storage_key = '{"commonPatch":["/fe_api/burdock/v2/note/post","/api/sns/web/v1/comment/post","/api/sns/web/v1/note/like","/api/sns/web/v1/note/collect","/api/sns/web/v1/user/follow","/api/sns/web/v1/feed","/api/sns/web/v1/login/activate","/api/sns/web/v1/note/metrics_report","/api/redcaptcha","/api/store/jpd/main","/phoenix/api/strategy/getAppStrategy"],"signUrl":"https://fe-video-qc.xhscdn.com/fe-platform/6e0d0a976c31ec4cf07d8dfaea68aefe79a8c678.js","signVersion":"1","url":"https://fe-video-qc.xhscdn.com/fe-platform/7a700537086390bf42ed95a3c3b675820f791299.js","reportUrl":"/api/sec/v1/shield/webprofile","desVersion":"2","validate":true}'
localStorage._byted_param_sw = 'JnfXqTqnLfFr+qj7drY='
localStorage.tt_scid = 'n8JIfW7LWjEtZFgaQI3Ho4FcVKg9-MXuDJEXkq7VyJIv7Dip2dUDozmgFB8gHXUL1db3'

localStorage.__proto__ = Storage.prototype;

sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;


localStorage = catchvm.proxy(localStorage);
sessionStorage = catchvm.proxy(sessionStorage);