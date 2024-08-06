var Document = function Document(){

};catchvm.func_set_natvie(Document)
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
/////////////////////////////////////////////////////////////////////
Document.prototype.URL = ''
Document.prototype.cookie = 'abRequestId=46a9217c-b10b-5524-a6de-836795116479; webBuild=4.28.3; xsecappid=xhs-pc-web; a1=1911c39c2131adxh03kz55nj5glpcb3cc95jf7in050000155799; webId=b4a88c9270368a14242affaceb42faa6; gid=yjyySqjSS2SKyjyySqjSJjW3yqy0fCx8qTu22I82IV2k1V28USDqSi888y22Wjj8KD08WSi8; unread={%22ub%22:%2266a71df7000000000503b8a0%22%2C%22ue%22:%2266a70e46000000000d030cde%22%2C%22uc%22:29}; websectiga=cf46039d1971c7b9a650d87269f31ac8fe3bf71d61ebf9d9a0a87efb414b816c; sec_poison_id=b4ec967d-3695-4eda-98a0-5d256fb39d39'
Document.prototype.referrer = 'https://www.nmpa.gov.cn/'
Document.prototype.documentElement = catchvm.proxy(catchvm.memory.HTMLElements['html']())
Document.prototype.body = catchvm.proxy(catchvm.memory.HTMLElements['body']())
Document.prototype.head = catchvm.proxy(catchvm.memory.HTMLElements['head']())
Document.prototype.characterSet = 'UTF-8'
Document.prototype.charset = 'UTF-8'
Document.prototype.visibilityState = 'visible'


//////////////////////document.all//////////////////////
console.log('进入')
Document.prototype.all = documentall.DocumentAll()
Document.prototype.all.length = 3
Object.defineProperties(Document.prototype.all, {
    [Symbol.toStringTag]: {
        value: "HTMLAllCollection",
        configurable: true
    }
});
console.log('退出')
//////////////////////document.all//////////////////////




Document.prototype.hasUnpartitionedCookieAccess = function hasUnpartitionedCookieAccess(){
    console.log(arguments);
    debugger;
};catchvm.func_set_natvie(Document.prototype.hasUnpartitionedCookieAccess);

Document.prototype.createExpression = function createExpression(){
    console.log(arguments)
    return {}
};catchvm.func_set_natvie(Document.prototype.createExpression);


Document.prototype.exitFullscreen = function exitFullscreen(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.exitFullscreen);

Document.prototype.getElementsByClassName = function getElementsByClassName(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementsByClassName);

Document.prototype.getElementById = function getElementById(id){
    console.log('执行了document.getElementById --->'+id)
    debugger;
    if(id == "root-hammerhead-shadow-ui"){
        return null;
    }

    if(id == 'a'){
        return null;
    }


    if(id == 'script'){
        return {
            0: catchvm.memory.HTMLElements['script']()
        }
    }

    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementById);

Document.prototype.createElement = function createElement(tagName){
    console.log('执行了document.createElement --->'+tagName)
    debugger;
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
    console.log('执行了document.getElementsByTagName --->'+name)
    debugger;
    if(name == 'meta'){
        console.log(arguments)
        return catchvm.memory.meta
    }

    if(name == 'script'){
        console.log(arguments)
        return {
            '0':catchvm.proxy(catchvm.memory.HTMLElements['script']()),
            '1':catchvm.proxy(catchvm.memory.HTMLElements['script']())
        }
    }
    if(name == 'base'){
        console.log(arguments)
        return catchvm.memory.htmlAllCollection
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
    console.log('执行了document.createEvent --->'+type)
    debugger;
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

// Document.prototype.__defineGetter__("URL",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("cookie",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("referrer",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("documentElement",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("body",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("head",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("characterSet",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("charset",function(){
//     throw TypeError("Illegal invocation")
// })
// Document.prototype.__defineGetter__("all",function(){
//     throw TypeError("Illegal invocation")
// })



