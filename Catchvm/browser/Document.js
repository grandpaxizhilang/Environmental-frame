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
Document.prototype.cookie = 'msToken=i131GW_hbK6CTki8NKYKyjMMaAnTffWTyaXpTRKydWOn92a1r3EHGi1Zh8e3eSLkVWS_77E9E16VXtxXmMszDmTxVrkf9zCOJ8TScRXT; __ac_signature=_02B4Z6wo00f01h6hOYAAAIDBaI7kz82EYuoegT0AAOHBaf; ttcid=3c59165d91fd450da1231a0aedc6a2c016; local_city_cache=%E5%B9%BF%E5%B7%9E; csrftoken=dbb2bccd2756a550ae8f402927ae6557; s_v_web_id=verify_luz8dixy_MdatAwTa_05W5_45oT_ANO2_YJkDiJ56c8R4; tt_scid=n8JIfW7LWjEtZFgaQI3Ho4FcVKg9-MXuDJEXkq7VyJIv7Dip2dUDozmgFB8gHXUL1db3'
Document.prototype.referrer = 'https://www.toutiao.com/'
Document.prototype.documentElement = catchvm.proxy(catchvm.memory.HTMLElements['html']())
Document.prototype.body = catchvm.memory.HTMLElements['body']()




Document.prototype.getElementsByClassName = function getElementsByClassName(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementsByClassName);

Document.prototype.getElementById = function getElementById(){
    console.log(arguments)
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementById);

Document.prototype.createElement = function createElement(tagName){
    console.log(arguments)
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
    console.log(arguments)
    debugger;
    return [{}]
};catchvm.func_set_natvie(Document.prototype.getElementsByTagName);

Document.prototype.querySelectorAll = function querySelectorAll(selectors){
    console.log(arguments)
    debugger;
    return nodelist;
};catchvm.func_set_natvie(Document.prototype.querySelectorAll);


Document.prototype.createEvent = function createEvent(type){
    console.log(arguments)
    debugger;
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




