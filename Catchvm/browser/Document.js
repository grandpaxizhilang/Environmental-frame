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
Document.prototype.cookie = '_lxsdk_cuid=18f05113f90c8-05772e5fb860bf-4c657b58-144000-18f05113f90c8; _lxsdk=18f05113f90c8-05772e5fb860bf-4c657b58-144000-18f05113f90c8; WEBDFPID=v5665v9549745097zu90z4vz2zx80v1781u94885wuu97958xww3y164-2029136968009-1713776967432UCGMISKfd79fef3d01d5e9aadc18ccd4d0c95071901; _hc.v=25d77bda-2e35-2b2f-19fc-f242534b1eb6.1713777023; qruuid=62704cfd-d1e4-492a-abc3-24e7c8094838; ll=7fd06e815b796be3df069dec7836c3df; s_ViewType=10; fspop=test; cy=4; cye=guangzhou'
Document.prototype.referrer = 'https://www.dianping.com/guangzhou/ch10/o2'
Document.prototype.documentElement = catchvm.proxy(catchvm.memory.HTMLElements['html']())
Document.prototype.body = catchvm.memory.HTMLElements['body']()



Document.prototype.all = catchvm.memory.htmlAllCollection
catchvm.memory.documentcount = 0
Object.defineProperty(Document.prototype, "all", {
    get: function (){
        return [undefined, undefined, catchvm.memory.htmlAllCollection][catchvm.memory.documentcount++]
    }
})




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




