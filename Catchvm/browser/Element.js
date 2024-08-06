var Element = function Element(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Element)
Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

Element.prototype.tagName = ''
Element.prototype.classList = catchvm.memory.domTokenList
Element.prototype.attributes = catchvm.memory.namedNodeMap



Element.prototype.setAttribute = function setAttribute(name,value){
    console.log('执行了element.setAttribute --->'+'name:(' + name + '),tagName:('+tagName + ')')
    debugger;
};catchvm.func_set_natvie(Element.prototype.setAttribute)


Element.prototype.getElementsByTagName = function getElementsByTagName(tagName){
    console.log('执行了element.getElementsByTagName --->'+tagName)
    debugger;
    if(tagName == 'i'){
        console.log(arguments)
        // return catchvm.memory.htmlAllCollection;
        return {length:0};
    }
    
    console.log(arguments)
    debugger;
    return catchvm.memory.htmlAllCollection;
};catchvm.func_set_natvie(Element.prototype.getElementsByTagName)

Element.prototype.getAttribute = function getAttribute(attributeName){
    console.log('执行了element.getAttribute --->'+attributeName)
    console.log(arguments)
    debugger;
    if (attributeName == 'r'){
        return 'm';
    }
    if (attributeName == 'selenium' || attributeName == 'webdriver' || attributeName == 'driver'){
        return null;
    }

    return null;
};catchvm.func_set_natvie(Element.prototype.getAttribute)

Element.prototype.remove = function remove(){
    // debugger;
    return null;
};catchvm.func_set_natvie(Element.prototype.remove)


///////////////////////////////////////////////////////////////

Element.prototype.__proto__ = Node.prototype;


///////////////////////////////////////////////////////////////
// Element.prototype.__defineGetter__("tagName",function(){
//     throw TypeError("Illegal invocation")
// })
// Element.prototype.__defineGetter__("classList",function(){
//     throw TypeError("Illegal invocation")
// })
// Element.prototype.__defineGetter__("attributes",function(){
//     throw TypeError("Illegal invocation")
// })

