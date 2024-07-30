var URL = function URL(url){
    return catchvm.memory.URL(url);
};catchvm.func_set_natvie(URL);
Object.defineProperties(URL.prototype, {
    [Symbol.toStringTag]: {
        value: "URL",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
URL.revokeObjectURL = function revokeObjectURL(objectURL){
    console.log(arguments)
    return undefined;
};catchvm.func_set_natvie(URL.revokeObjectURL);

URL.createObjectURL = function createObjectURL(object){
    console.log(arguments)

    var room = [
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/439ebb19-5bfa-4025-b64d-e4c91564d97f',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/b8cc8ec3-89b2-4985-b632-699cb4fc960e',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/359feba5-24d4-42cb-aaf1-6fa3bf091a7f',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/4b2b323d-af03-40b3-963e-3690c9b50a24',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/24e160dc-9248-4642-9ebe-94ebc282909d',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/b8bbc67d-8b75-49f7-9dfd-46860f377f80',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/bb280e54-810b-4f9c-b450-131f56117ec9',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/b94677a5-6b6d-40b7-86a0-d544e28d76ed',
        'blob:chrome-extension://inedkoakiaeepjoblbiiipedngonadhn/f95ff2c7-c4a2-43b3-9e00-da4ed3d61728'
    ]

    return room[Math.floor(Math.random() * room.length)];
};catchvm.func_set_natvie(URL.createObjectURL);






///////////////////////////////////////////////////////////////

catchvm.memory.URL = function(url){
    var url = {};
    ////////////////////////////////////////////////


    /////////////////////////////////////////////////

    url.__proto__ = URL.prototype;
    return catchvm.proxy(url);
};