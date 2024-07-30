var ServiceWorkerContainer = function ServiceWorkerContainer(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(ServiceWorkerContainer)
Object.defineProperties(ServiceWorkerContainer.prototype, {
    [Symbol.toStringTag]: {
        value: "ServiceWorkerContainer",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
ServiceWorkerContainer.prototype.controller = null
ServiceWorkerContainer.prototype.oncontrollerchange = null
ServiceWorkerContainer.prototype.onmessage = null
ServiceWorkerContainer.prototype.onmessageerror = null

///////////////////////////////////////////////////////////////
ServiceWorkerContainer.prototype.__proto__ = EventTarget.prototype

catchvm.memory.serviceWorker = {}
catchvm.memory.serviceWorker.__proto__ = ServiceWorkerContainer.prototype
catchvm.memory.serviceWorker = catchvm.proxy(catchvm.memory.serviceWorker)