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



Element.prototype.getElementsByTagName = function getElementsByTagName(tagName){
    
    console.log(arguments)
    // debugger;
    return catchvm.memory.htmlAllCollection;
};catchvm.func_set_natvie(Element.prototype.getElementsByTagName)

Element.prototype.getAttribute = function getAttribute(attributeName){
    console.log(arguments)
    // debugger;
    return null;
};catchvm.func_set_natvie(Element.prototype.getAttribute)

Element.prototype.remove = function remove(){
    // debugger;
    return null;
};catchvm.func_set_natvie(Element.prototype.remove)


///////////////////////////////////////////////////////////////

Element.prototype.__proto__ = Node.prototype;


///////////////////////////////////////////////////////////////
Element.prototype.__defineGetter__("tagName",function(){
    throw TypeError("Illegal invocation")
})
Element.prototype.__defineGetter__("classList",function(){
    throw TypeError("Illegal invocation")
})
Element.prototype.__defineGetter__("attributes",function(){
    throw TypeError("Illegal invocation")
})

