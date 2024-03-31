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
Document.prototype.cookie = 'msessionid=A4XUZY1S7BWE336YSF1H8A79MEHSNVQTNFA4; rURL=http%3A%2F%2Fwww.yhd.com; _c_id=15wxuyz6hyjg6qz308x17105025987926imu; _s_id=dmjmxw82bcxqh16kmb417105025987928oru; jab-requestId=""'
Document.prototype.referrer = ''





Document.prototype.getElementById = function getElementById(){
    debugger;
};catchvm.func_set_natvie(Document.prototype.getElementById);

Document.prototype.createElement = function createElement(tagName){
    debugger;
    var tagname = tagName.toLowerCase()+'';
    if(catchvm.memory.HTMLElements[tagname] == 'undefined'){
        debugger;
    }
    return catchvm.proxy(catchvm.memory.HTMLElements[tagname]())
};catchvm.func_set_natvie(Document.prototype.createElement);


Document.prototype.getElementsByTagName = function getElementsByTagName(name){
    debugger;
    return [{}]
};catchvm.func_set_natvie(Document.prototype.getElementsByTagName);

Document.prototype.querySelectorAll = function querySelectorAll(selectors){
    debugger;
    return nodelist;
};catchvm.func_set_natvie(Document.prototype.querySelectorAll);




//未实现
// Document.prototype.createEvent = function createEvent(type){
//     debugger;
//     var Type = type.toLowerCase()+'';
//     if(catchvm.memory.Events[Type] == 'undefined'){
//         debugger;
//     }
//     return catchvm.proxy(catchvm.memory.Events[Type]())
// };catchvm.func_set_natvie(Document.prototype.createEvent);





// for (var property_ in Document.prototype) {
//     if(!(typeof Document.prototype[property_] === 'function')){       
//         Document.prototype.__defineGetter__(property_, function () {
//             throw new TypeError("Illegal invocation");
//         });
//     }  
// }


///////////////////////////////////////////////////////////////

Document.prototype.__proto__ = Node.prototype;




