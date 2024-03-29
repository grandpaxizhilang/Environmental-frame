var Document = function Document(){

};catchvm.func_set_natvie(Document)
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Document.prototype.URL = 'https://www.pinduoduo.com/home/medical/'
Document.prototype.cookie = '_nano_fp=XpmolpdYnpTbnqTal9_ZxZjOIWA6rklQOv3THMR7; api_uid=rBUUx2YGhpI4ICeayxyGAg=='
Document.prototype.referrer = 'https://www.pinduoduo.com/'





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




