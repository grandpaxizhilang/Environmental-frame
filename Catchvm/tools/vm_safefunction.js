//主要用来保护伪造的函数，让其更加难以被识破
(() =>{
    'use strict'
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('',')_',(Math.random() + '').toString(36)));
    const myToString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func, key, value){
        Object.defineProperty(func, key, {
            'enumerable':false,
            'configurable':true,
            'writable':true,
            'value':value
        })
    };
    delete Function.prototype['toString'];//删除原型链上面的toString
    set_native(Function.prototype,'toString',myToString);//自己定义一个getter方法
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");//套娃，保护我们定义的tostring，不然就暴露了
    this.catchvm.func_set_natvie = (func) => {
        set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
    };//导出函数到golobalThis
}).call(this)