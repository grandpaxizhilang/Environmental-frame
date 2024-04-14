var Node = function Node(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Node)
Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Node.prototype.ATTRIBUTE_NODE = 2;


Node.prototype.appendChild = function appendChild(aChild){
    console.log(arguments)
    var flag_ = false;
    if(this == aChild){
        debugger
        flag_ = true
    }else{
        for(let p =this;p.father_element !== null;p = p.father_element){
            if(p.father_element == aChild){
                debugger
                flag_ = true
            }
        }
    }

    if(flag_){
        debugger;
        throw new DOMException('Failed to execute \'appendChild\' on \'Node\': The new child element contains the parent.')
    }
    this.childelement.push(aChild)
    aChild.father_element = this;
    return aChild

    // debugger;
};catchvm.func_set_natvie(Node.prototype.appendChild)

Node.prototype.removeChild = function removeChild(Child){
    console.log(arguments)
    // debugger;
};catchvm.func_set_natvie(Node.prototype.removeChild)




// for (var property_ in Node.prototype) {
//     if(!(typeof Node.prototype[property_] === 'function')){       
//         Node.prototype.__defineGetter__(property_, function () {
//             throw new TypeError("Illegal invocation");
//         });
//     }  
// }


///////////////////////////////////////////////////////////////


Node.prototype.__proto__ = EventTarget.prototype;


