var CredentialsContainer = function CredentialsContainer(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(CredentialsContainer)
Object.defineProperties(CredentialsContainer.prototype, {
    [Symbol.toStringTag]: {
        value: "CredentialsContainer",
        configurable: true
    }
});

catchvm.memory.credentials = {}
catchvm.memory.credentials.__proto__ = CredentialsContainer.prototype
catchvm.memory.credentials = catchvm.proxy(catchvm.memory.credentials)