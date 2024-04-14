var UserActivation = function UserActivation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(UserActivation)
Object.defineProperties(UserActivation.prototype, {
    [Symbol.toStringTag]: {
        value: "UserActivation",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
UserActivation.prototype.hasBeenActive = true
UserActivation.prototype.isActive = false
///////////////////////////////////////////////////////////////
catchvm.memory.userActivation = {}
catchvm.memory.userActivation.__proto__ = UserActivation.prototype
catchvm.memory.userActivation = catchvm.proxy(catchvm.memory.userActivation)




