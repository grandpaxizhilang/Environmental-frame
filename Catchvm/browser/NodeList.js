var NodeList = function NodeList(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(NodeList)
Object.defineProperties(NodeList.prototype, {
    [Symbol.toStringTag]: {
        value: "NodeList", 
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
NodeList.prototype.length = 0;

NodeList.prototype.entries = function entries(){debugger;};catchvm.func_set_natvie(NodeList.prototype.entries)
NodeList.prototype.forEach = function forEach(){debugger;};catchvm.func_set_natvie(NodeList.prototype.forEach)
NodeList.prototype.keys = function keys(){debugger;};catchvm.func_set_natvie(NodeList.prototype.keys)
NodeList.prototype.values = function values(){debugger;};catchvm.func_set_natvie(NodeList.prototype.values)

///////////////////////////////////////////////////////////////
nodelist = [];
nodelist.__proto__ = NodeList.prototype;

nodelist = catchvm.proxy(nodelist);



