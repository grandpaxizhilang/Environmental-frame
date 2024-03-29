function xx(pr,fo,name_){
    var code = '';
    switch(typeof(pr[fo])){
        case "function":
            var temp = name_+'.prototype.' + fo;
            code = temp + ' = function '+fo+'(){debugger;};catchvm.func_set_natvie('+temp+');';
            break;
        case 'object':
            var temp = name_+'.prototype.' + fo;
            code = temp + ' = catchvm.proxy(class '+pr[fo]+'());'
            break;
        default:
            var temp = name_+'.prototype.' + fo;
            code = temp + '=' + pr[fo] + ';';
            break;
    }
    return code;
}

//pr是实例，name_是其实例的原型（以字符串的形式输入）
function getcode(pr,name_){
    var code = '';
    for (var fo in pr.__proto__){
        code += xx(pr,fo,name_) + "\r\n";
    }
    return code;
}


