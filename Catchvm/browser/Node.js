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
    debugger;
};catchvm.func_set_natvie(Node.prototype.appendChild)

// for (var property_ in Node.prototype) {
//     if(!(typeof Node.prototype[property_] === 'function')){       
//         Node.prototype.__defineGetter__(property_, function () {
//             throw new TypeError("Illegal invocation");
//         });
//     }  
// }


///////////////////////////////////////////////////////////////


Node.prototype.__proto__ = EventTarget.prototype;


