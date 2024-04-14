//冻结navigator防止修改值
Object.freeze(navigator)

catchvm.memory.isFrozen = Object.isFrozen
Object.isFrozen = function isFrozen(obj){
    debugger;
    return catchvm.memory.isFrozen(obj)
};catchvm.func_set_natvie(Object.isFrozen)


catchvm.memory.assign = Object.assign
Object.assign = function assign(target, source){
    console.log(arguments)
    debugger;
    return catchvm.memory.assign(target, source)
}


catchvm.memory.entries = Object.entries
Object.entries = function entries(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.entries(obj)
};catchvm.func_set_natvie(Object.entries)


catchvm.memory.getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop){
    if(obj == navigator && prop == 'webdriver'){
        console.log("检测了 ——> Object.getOwnPropertyDescriptor(navigator,'webdriver')")
        return undefined
    }

    console.log(arguments)
    debugger;
    return catchvm.memory.getOwnPropertyDescriptor(obj, prop)
};catchvm.func_set_natvie(Object.getOwnPropertyDescriptor)


catchvm.memory.getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors
Object.getOwnPropertyDescriptors = function getOwnPropertyDescriptors(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.getOwnPropertyDescriptors(obj)
};catchvm.func_set_natvie(Object.getOwnPropertyDescriptors)


catchvm.memory.getOwnPropertyNames = Object.getOwnPropertyNames
Object.getOwnPropertyNames = function getOwnPropertyNames(obj){
    if(obj == navigator){
        // debugger
        console.log('检测了 ——> Object.getOwnPropertyNames(navigator)')
        return []
    }
    if(obj.category){
        // debugger
        console.log('检测了 ——> Object.getOwnPropertyNames(obj),obj是含有category的一个对象')
        return catchvm.memory.getOwnPropertyNames(obj)
    }

    console.log(arguments)
    debugger;
    return catchvm.memory.getOwnPropertyNames(obj)
};catchvm.func_set_natvie(Object.getOwnPropertyNames)


catchvm.memory.getOwnPropertySymbols = Object.getOwnPropertySymbols
Object.getOwnPropertySymbols = function getOwnPropertySymbols(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.getOwnPropertySymbols(obj)
};catchvm.func_set_natvie(Object.getOwnPropertySymbols)


catchvm.memory.hasOwn = Object.hasOwn
Object.hasOwn = function hasOwn(obj, prop){
    console.log(arguments)
    debugger;
    return catchvm.memory.hasOwn(obj, prop)
};catchvm.func_set_natvie(Object.hasOwn)


catchvm.memory.isExtensible = Object.isExtensible
Object.isExtensible = function isExtensible(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.isExtensible(obj)
};catchvm.func_set_natvie(Object.isExtensible)

 
catchvm.memory.isSealed = Object.isSealed
Object.isSealed = function isSealed(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.isSealed(obj)
};catchvm.func_set_natvie(Object.isSealed)


catchvm.memory.keys = Object.keys
Object.keys = function keys(obj){
    if(obj.toString().indexOf('HTMLDocument') != -1){
        console.log('检测了 ——> Object.keys(HTMLDocument)')
        return []
    }
    if(obj === Document.prototype){
        console.log('检测了 ——> Object.keys(Document.prototype)')
        return [
            "implementation",
            "URL",
            "documentURI",
            "compatMode",
            "characterSet",
            "charset",
            "inputEncoding",
            "contentType",
            "doctype",
            "documentElement",
            "xmlEncoding",
            "xmlVersion",
            "xmlStandalone",
            "domain",
            "referrer",
            "cookie",
            "lastModified",
            "readyState",
            "title",
            "dir",
            "body",
            "head",
            "images",
            "embeds",
            "plugins",
            "links",
            "forms",
            "scripts",
            "currentScript",
            "defaultView",
            "designMode",
            "onreadystatechange",
            "anchors",
            "applets",
            "fgColor",
            "linkColor",
            "vlinkColor",
            "alinkColor",
            "bgColor",
            "all",
            "scrollingElement",
            "onpointerlockchange",
            "onpointerlockerror",
            "hidden",
            "visibilityState",
            "wasDiscarded",
            "prerendering",
            "featurePolicy",
            "webkitVisibilityState",
            "webkitHidden",
            "onbeforecopy",
            "onbeforecut",
            "onbeforepaste",
            "onfreeze",
            "onprerenderingchange",
            "onresume",
            "onsearch",
            "onvisibilitychange",
            "timeline",
            "fullscreenEnabled",
            "fullscreen",
            "onfullscreenchange",
            "onfullscreenerror",
            "webkitIsFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitFullscreenEnabled",
            "webkitFullscreenElement",
            "onwebkitfullscreenchange",
            "onwebkitfullscreenerror",
            "rootElement",
            "pictureInPictureEnabled",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "oncopy",
            "oncut",
            "onpaste",
            "children",
            "firstElementChild",
            "lastElementChild",
            "childElementCount",
            "activeElement",
            "styleSheets",
            "pointerLockElement",
            "fullscreenElement",
            "adoptedStyleSheets",
            "pictureInPictureElement",
            "fonts",
            "adoptNode",
            "append",
            "captureEvents",
            "caretRangeFromPoint",
            "clear",
            "close",
            "createAttribute",
            "createAttributeNS",
            "createCDATASection",
            "createComment",
            "createDocumentFragment",
            "createElement",
            "createElementNS",
            "createEvent",
            "createExpression",
            "createNSResolver",
            "createNodeIterator",
            "createProcessingInstruction",
            "createRange",
            "createTextNode",
            "createTreeWalker",
            "elementFromPoint",
            "elementsFromPoint",
            "evaluate",
            "execCommand",
            "exitFullscreen",
            "exitPictureInPicture",
            "exitPointerLock",
            "getAnimations",
            "getElementById",
            "getElementsByClassName",
            "getElementsByName",
            "getElementsByTagName",
            "getElementsByTagNameNS",
            "getSelection",
            "hasFocus",
            "hasStorageAccess",
            "importNode",
            "open",
            "prepend",
            "queryCommandEnabled",
            "queryCommandIndeterm",
            "queryCommandState",
            "queryCommandSupported",
            "queryCommandValue",
            "querySelector",
            "querySelectorAll",
            "releaseEvents",
            "replaceChildren",
            "requestStorageAccess",
            "requestStorageAccessFor",
            "startViewTransition",
            "webkitCancelFullScreen",
            "webkitExitFullscreen",
            "write",
            "writeln",
            "fragmentDirective",
            "hasPrivateToken",
            "hasRedemptionRecord",
            "onscrollend"
        ]
    }
    if(obj.toString().indexOf('HTMLImageElement') != -1){
        console.log('检测了 ——> Object.keys(HTMLImageElement)')
        return []
    }
    if(obj[0] == "directSign"){
        console.log('检测了 ——> Object.keys([directSign, .....])')
        return [
            "directSign",
            "consistent",
            "location",
            "switch",
            "dom",
            "debugger",
            "node",
            "phantom",
            "webdriver",
            "incognito",
            "hook"
        ]
    }


    console.log(arguments)
    debugger;
    return catchvm.memory.keys(obj)
};catchvm.func_set_natvie(Object.keys)


catchvm.memory.values = Object.values
Object.values = function values(obj){
    console.log(arguments)
    debugger;
    return catchvm.memory.values(obj)
};catchvm.func_set_natvie(Object.values)




// Object.groupBy()
// Object.is()