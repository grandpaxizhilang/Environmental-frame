var Document = function Document(){

};catchvm.func_set_natvie(Document)
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Document.prototype.URL = ''
Document.prototype.cookie = 'MKT_CKID=1716621525229.0a30c.p5xy; UBT_VID=1716621525527.ba766vB4LEun; GUID=09031066416516426752; _RF1=223.160.230.38; _RSG=XZqvuCNNPoBqoo2Ozuxos8; _RDG=28d3d9e8a6cc2222c41dce0f3841ece293; _RGUID=bc995d73-38e7-48e1-8db2-ef8f580b2cb4; MKT_Pagesource=PC; manualclose=1; Session=smartlinkcode=U130727&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=; Union=AllianceID=4902&SID=130727&OUID=&createtime=1716622026&Expires=1717226826070; ibulanguage=CN; ibulocale=zh_cn; cookiePricesDisplayed=CNY; IBU_TRANCE_LOG_P=21753324140; intl_ht1=h4=2_441585; login_type=0; login_uid=6F90D8C0A83076481A44FB774C417EAA; DUID=u=03789637FFE786FF7C36810405B8E4B9&v=0; IsNonUser=F; AHeadUserInfo=VipGrade=0&VipGradeName=%C6%D5%CD%A8%BB%E1%D4%B1&UserName=&NoReadMessageCount=0; _bfa=1.1716621525527.ba766vB4LEun.1.1716630116152.1716630711870.3.3.102003; _jzqco=%7C%7C%7C%7C%7C1.718742243.1716621525226.1716630115991.1716630712133.1716630115991.1716630712133.0.0.0.14.14'
Document.prototype.referrer = 'https://www.dianping.com/guangzhou/ch10/o2'
Document.prototype.documentElement = catchvm.proxy(catchvm.memory.HTMLElements['html']())
Document.prototype.body = catchvm.proxy(catchvm.memory.HTMLElements['body']())
Document.prototype.head = catchvm.proxy(catchvm.memory.HTMLElements['head']())
Document.prototype.characterSet = 'UTF-8'
Document.prototype.charset = 'UTF-8'



Document.prototype.all = catchvm.memory.htmlAllCollection
// catchvm.memory.documentcount = 0
// Object.defineProperty(Document.prototype, "all", {
//     get: function (){
//         return [undefined, undefined, catchvm.memory.htmlAllCollection][catchvm.memory.documentcount++]
//     }
// })



Document.prototype.exitFullscreen = function exitFullscreen(){
    debugger;
};catchvm.func_set_natvie(Document.prototype.exitFullscreen);

Document.prototype.getElementsByClassName = function getElementsByClassName(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementsByClassName);

Document.prototype.getElementById = function getElementById(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementById);

Document.prototype.createElement = function createElement(tagName){
    console.log('createElement --->'+tagName)
    // debugger;
    if((tagName.toString().indexOf('object') != -1) || (tagName.toString() == '')){
        debugger;
        throw new DOMException("Failed to execute 'createElement' on 'Document': The tag name provided ('"+tagName.toString()+"') is not a valid name.")
    }else{
        var tagname = tagName.toLowerCase()+'';
        if(catchvm.memory.HTMLElements[tagname] == undefined){
            debugger;
        }
        return catchvm.proxy(catchvm.memory.HTMLElements[tagname]())
    }

};catchvm.func_set_natvie(Document.prototype.createElement);


Document.prototype.getElementsByTagName = function getElementsByTagName(name){
    if(name == 'meta'){
        return catchvm.memory.meta
    }

    console.log(arguments)
    debugger;
    return catchvm.memory.htmlAllCollection
};catchvm.func_set_natvie(Document.prototype.getElementsByTagName);

Document.prototype.querySelectorAll = function querySelectorAll(selectors){
    console.log(arguments)
    debugger;
    return nodelist;
};catchvm.func_set_natvie(Document.prototype.querySelectorAll);


Document.prototype.createEvent = function createEvent(type){
    console.log('createEvent --->'+type)
    console.log(arguments)
    // debugger;
    var Type = type.toLowerCase()+'';

    if(Type == 'touchevent'){
        throw new DOMException("Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
    }


    if(catchvm.memory.Events[Type] == 'undefined'){
        debugger;
    }
    return catchvm.proxy(catchvm.memory.Events[Type]())
};catchvm.func_set_natvie(Document.prototype.createEvent);



// for (var property_ in Document.prototype) {
//     if(!(typeof Document.prototype[property_] === 'function')){       
//         Document.prototype.__defineGetter__(property_, function () {
//             throw new TypeError("Illegal invocation");
//         });
//     }  
// }


///////////////////////////////////////////////////////////////

Document.prototype.__proto__ = Node.prototype;


///////////////////////////////////////////////////////////////

Document.prototype.__defineGetter__("URL",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("cookie",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("referrer",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("documentElement",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("body",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("head",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("characterSet",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("charset",function(){
    throw TypeError("Illegal invocation")
})
Document.prototype.__defineGetter__("all",function(){
    throw TypeError("Illegal invocation")
})



