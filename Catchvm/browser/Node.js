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
Node.prototype.parentNode = {removeChild : function (){debugger;return {}}}
Node.prototype.parentElement = {removeChild : function (){debugger;return {}}}


Node.prototype.appendChild = function appendChild(aChild){
    console.log('执行了appendChild --->'+aChild)
    debugger;

    if(aChild.tagName == 'DIV'){
        aChild.offsetHeight = 20
    }

    console.log(arguments)


    if(this.tagName == 'FORM' && aChild.tagName == 'INPUT'){
        debugger;
        if(aChild.id){
            this[aChild.id] = aChild
        }
        if(aChild.name){
            this[aChild.name] = aChild
        }

    }

    if(this.tagName == 'BODY' && aChild.tagName == 'FORM'){
        debugger;
        if(aChild.id){
            window.__proto__[aChild.id] = aChild
            window.__proto__.__proto__[aChild.id] = aChild
        }
        if(aChild.name){
            window.__proto__[aChild.name] = aChild
            window.__proto__.__proto__[aChild.name] = aChild
        }

    }



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
    console.log('执行了removeChild --->'+Child)
    debugger;
    var flag_ = false;
    if(this == Child){
        debugger;
        flag_ = true;
    }{
        for(let i;i < this.childelement.length;i++){
            flag_ = true;
            if(this.childelement[i] == Child){
                flag_ =false;
                break;
            }
        }
    }
    
    if(flag_){
        debugger;
        throw new DOMException('Failed to execute \'removeChild\' on \'Node\': The node to be removed is not a child of this node.')
    }


    var index = this.childelement.indexOf(Child);
    this.childelement.splice(index, 1);
    Child.father_element = null;
    return Child

};catchvm.func_set_natvie(Node.prototype.removeChild)


///////////////////////////////////////////////////////////////

Node.prototype.__proto__ = EventTarget.prototype;

///////////////////////////////////////////////////////////////


// Node.prototype.__defineGetter__("ATTRIBUTE_NODE",function(){
//     throw TypeError("Illegal invocation")
// })
// Node.prototype.__defineGetter__("parentNode",function(){
//     throw TypeError("Illegal invocation")
// })
