var CharacterData = function CharacterData(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(CharacterData)
Object.defineProperties(CharacterData.prototype, {
    [Symbol.toStringTag]: {
        value: "CharacterData",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
CharacterData.prototype.__proto__ = Node.prototype