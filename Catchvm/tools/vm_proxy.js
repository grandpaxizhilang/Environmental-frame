//框架代理功能
catchvm.proxy = function(o){
    if(catchvm.memory.config.proxy == false){return o};
    return new Proxy(o, {
        set(target, property, value){
            if(property !== 'chl'){
                console.table([{"方法":"set-->",'调用者':target,"类型":property,'值':value}]);
            }
            return Reflect.set(...arguments);
        },
        get(target, property, receiver){
            if( property !== 'Math' && property !== 'undefined' && property !== "isNaN" && property !== 'Number' && property !== 'encodeURI' && property !== 'parseFloat' && property !== 'decodeURI' && property !== 'MSSelection' && property !== 'SVGAngle' && property !== 'Position' && property !== 'MSEventObj' && property !== 'Object' && property !== 'MSSelection' && property !== 'MessageEvent' && property !== 'SVGPointList' && property !== 'SVGAElement' && property !== 'VBArray' && property !== 'TextMetrics' && property !== 'DOMException' && property !== 'SVGZoomEvent' && property !== 'StyleSheet' && property !== 'CSSPageRule' && property !== 'CSSStyleRule' && property !== 'CSSRuleList' && property !== 'CSSMediaRule' && property !== 'CSSMediaRule' && property !== 'TimeRanges' ){
                console.table([{"方法":"get<--",'调用者':target,"类型":property,'值':target[property]}]);
            }
            return target[property];
        }
    });
}
