var External = function External(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(External)
Object.defineProperties(External.prototype, {
    [Symbol.toStringTag]: {
        value: "External",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


External.prototype.AddSearchProvider = function AddSearchProvider(){debugger;};catchvm.func_set_natvie(External.prototype.AddSearchProvider)
External.prototype.IsSearchProviderInstalled = function IsSearchProviderInstalled(){debugger;};catchvm.func_set_natvie(External.prototype.IsSearchProviderInstalled)

///////////////////////////////////////////////////////////////

external = {};
external.__proto__ = External.prototype
external = catchvm.proxy(external);