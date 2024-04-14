//框架代理功能
catchvm.proxy = function(o){
    if(catchvm.memory.config.proxy == false){return o};
    return new Proxy(o, {
        set(target, property, value){
            
            console.table([{"方法":"set-->",'调用者':target,"类型":property,'值':value}]);
            return Reflect.set(...arguments);
        },
        get(target, property, receiver){   
            if(property !== 'Math' && property !== 'undefined' && property !== "isNaN"){
                console.table([{"方法":"get<--",'调用者':target,"类型":property,'值':target[property]}]);
            }
            return target[property];
        }
    });
}
