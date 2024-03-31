var MediaDevices = function MediaDevices(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(MediaDevices)
Object.defineProperties(MediaDevices.prototype, {
    [Symbol.toStringTag]: {
        value: "MediaDevices",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
MediaDevices.prototype.ondevicechange = null;


MediaDevices.prototype.enumerateDevices = function enumerateDevices(){debugger;};catchvm.func_set_natvie(MediaDevices.prototype.enumerateDevices)
MediaDevices.prototype.getDisplayMedia = function getDisplayMedia(){debugger;};catchvm.func_set_natvie(MediaDevices.prototype.getDisplayMedia)
MediaDevices.prototype.getSupportedConstraints = function getSupportedConstraints(){debugger;};catchvm.func_set_natvie(MediaDevices.prototype.getSupportedConstraints)
MediaDevices.prototype.setCaptureHandleConfig = function setCaptureHandleConfig(){debugger;};catchvm.func_set_natvie(MediaDevices.prototype.setCaptureHandleConfig)



 
///////////////////////////////////////////////////////////////
navigator.mediaDevices = {};
navigator.mediaDevices.__proto__ = MediaDevices.prototype;

MediaDevices.prototype.__proto__ = EventTarget.prototype;


navigator.mediaDevices = catchvm.proxy(navigator.mediaDevices);