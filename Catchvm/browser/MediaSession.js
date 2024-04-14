var MediaSession = function MediaSession(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(MediaSession)
Object.defineProperties(MediaSession.prototype, {
    [Symbol.toStringTag]: {
        value: "MediaSession",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
MediaSession.prototype.metadata = null
MediaSession.prototype.playbackState = 'none'
///////////////////////////////////////////////////////////////
catchvm.memory.mediaSession = {}
catchvm.memory.mediaSession.__proto__ = MediaSession.prototype
catchvm.memory.mediaSession = catchvm.proxy(catchvm.memory.mediaSession)



