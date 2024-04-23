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
localStorage.tt_scid = 'fj9WDjGsZIIRjlfk4MqP8QwzdNZclzad-FJwSFLoCaB84qKtJNGWgLlI3oUW3moO46aa'
localStorage.xmst = 'lQJqBzx8sq4tBjGDO2aaC4I4PEbyLY-pfeV3glvlkngsq2_kzMP9WA9fgw-hfhSvJnrtUpg-PzymOdp3GSEIgDRzkA2rC7_e3T32xnH_0E-dH3Q39IKN6X4V6er5tQ=='
localStorage.dfp_params_list = '{"black_host":["gatewaydsp.meituan.com","portal-portm.meituan.com","dd.sankuai.com","dd.meituan.com","catfront.dianping.com","catfront.51ping.com","report.meituan.com","dreport.meituan.net","postreport.meituan.com","wreport1.meituan.net","lx0.meituan.com","lx1.meituan.net","lx2.meituan.net","plx.meituan.com","hlx.meituan.com","ad.e.waimai.sankuai.com:80","speech-inspection.vip.sankuai.com","kms.sankuai.com","r.dianping.com","r1.dianping.com","api-channel.waimai.meituan.com","lion-monitor.sankuai.com","cat-config.sankuai.com","catdot.sankuai.com","s3plus.meituan.net","ebooking.meituan.com","eb.hotel.test.sankuai.com","eb.vip.sankuai.com","eb.meituan.com","logan.sankuai.com","mads.meituan.com","mlog.dianping.com","oneservice.meituan.com","api-unionid.meituan.com","fe-config.meituan.com","fe-config0.meituan.com","h.meituan.com","p.meituan.com","peisong-collector.meituan.com","wreport2.meituan.net","hreport.meituan.com","c.qcs.test.sankuai.com","dache.st.meituan.com","dache.meituan.com"],"black_url":["syncloud.meituan.com/be/chp/takeaway/","syncloud.meituan.com/be/chp/takeawayClassifyManagement/","syncloud.meituan.com/be/chp/createSkuToTakeaway/","i.meituan.com/api/address","i.meituan.com/api/maf","mapi.dianping.com/mapi/mlog/applog.bin","mapi.dianping.com/mapi/mlog/zlog.bin","mapi.dianping.com/mapi/mlog/mtmidas.bin","mapi.dianping.com/mapi/mlog/mtzmidas.bin","m.dianping.com/adp/log","mlog.meituan.com/log","mlog.dianping.com/log","m.api.dianping.com/mapi/mlog/applog.bin","m.api.dianping.com/mapi/mlog/zlog.bin","m.api.dianping.com/mapi/mlog/mtmidas.bin","m.api.dianping.com/mapi/mlog/mtzmidas.bin","peisong.meituan.com/collector/report/logdata/short/batch","transcode-video.sankuai.com/pfop","peisong.meituan.com/api/collector/collector/report/logdata/short/batch","api-map.meituan.com/tile/style","api-map01.meituan.com/tile/style","api-map02.meituan.com/tile/style","api-map03.meituan.com/tile/style","api-map04.meituan.com/tile/style","api-map05.meituan.com/tile/style","api-map.meituan.com/tile/source","api-map01.meituan.com/tile/source","api-map02.meituan.com/tile/source","api-map03.meituan.com/tile/source","api-map04.meituan.com/tile/source","api-map05.meituan.com/tile/source","api-map.meituan.com/tile/font","api-map01.meituan.com/tile/font","api-map02.meituan.com/tile/font","api-map03.meituan.com/tile/font","api-map04.meituan.com/tile/font","api-map05.meituan.com/tile/font","api-map.meituan.com/tile/grid","api-map01.meituan.com/tile/grid","api-map02.meituan.com/tile/grid","api-map03.meituan.com/tile/grid","api-map04.meituan.com/tile/grid","api-map05.meituan.com/tile/grid","api-map.meituan.com/tile/dem","api-map01.meituan.com/tile/dem","api-map02.meituan.com/tile/dem","api-map03.meituan.com/tile/dem","api-map04.meituan.com/tile/dem","api-map05.meituan.com/tile/dem","api-map.meituan.com/render/traffic","api-map01.meituan.com/render/traffic","api-map02.meituan.com/render/traffic","api-map03.meituan.com/render/traffic","api-map04.meituan.com/render/traffic","api-map05.meituan.com/render/traffic","api-map.meituan.com/tile/model","api-map01.meituan.com/tile/model","api-map02.meituan.com/tile/model","api-map03.meituan.com/tile/model","api-map04.meituan.com/tile/model","api-map05.meituan.com/tile/model","spotter-relay.sankuai.com/auk01/","spotter-livevod.vip.sankuai.com/recordings/auk01/","e.dianping.com/joy/merchant/newuploadimage","e.51ping.com/joy/merchant/newuploadimage","spotter-relay.sankuai.com/maiot/","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/getLocationByIp","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionHeadInfo","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionResourceInfo","wx-shangou.meituan.com/quickbuy/v1/user/address/posname","wx-shangou.meituan.com/quickbuy/v1/activity/supersale/grab/queryUserSubscription","transcode-video.cloud.test.sankuai.com/pfop"],"close_knb_sign":0,"header_white_host":[],"swim_black_host":["ebooking.meituan.com","eb.hotel.test.sankuai.com","eb.vip.sankuai.com","eb.meituan.com","c.qcs.test.sankuai.com","dache.st.meituan.com","dache.meituan.com"],"white_host":[".dianping.com",".meituan.com",".sankuai.com",".maoyan.com",".neixin.cn",".51ping.com",".baobaoaichi.cn",".dper.com",".jchunuo.com"]}'

localStorage.__proto__ = Storage.prototype;

sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;


localStorage = catchvm.proxy(localStorage);
sessionStorage = catchvm.proxy(sessionStorage);