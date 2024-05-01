# 补环境框架

学习志远大佬的补环境课程实现的此框架

# 日志更新

### 2024-03-30

- 简单实现`HTMLScriptElement`、`HTMLAnchorElement`、`HTMLButtonElement`、`HTMLInputElement`、`HTMLLabelElement`、`HTMLLinkElement`、`HTMLImageElement`、`HTMLAudioElement`接口

### 2024-03-31

- 简单实现XMLHttpRequestEventTarget、XMLHttpRequest、MediaDevices、NodeList接口

- 补充了部分接口里面的属性和方法

### 2024-04-14

- 改错了Event、UIEvent接口多次new时，导致前面new出来实例中的type会跟着改变

- 简单实现了ImageData、CanvasRenderingContext2D、TextMetrics、MouseEvent、HTMLOptionElement、Option、AudioContext、BaseAudioContext、External、WebGLRenderingContext、WebGL2RenderingContext、ImageBitmapRenderingContext、Scheduling、UserActivation、NetworkInformation、Geolocation、Bluetooth、Clipboard、CredentialsContainer、Keyboard、NavigatorManagedData、StorageManager、ServiceWorkerContainer、VirtualKeyboard、WakeLock、Ink、HID、LockManager、MediaCapabilities、MediaSession、Permissions、Serial、GPU、USB、WindowControlsOverlay、XRSystem、NavigatorUAData、CSSStyleDeclaration、HTMLParagraphElement、HTMLHeadingElement、HTMLSpanElement、HTMLUListElement、HTMLLIElement、DOMImplementation、WebGLDebugRendererInfo接口

- 完善HTMLCanvasElement接口中getContext方法

- 完善Document接口中createEvent、createElement方法

- 完善补充Navigator接口中的部分属性和方法

- 实现将navigator冻结，防止navigator里面的属性的值被更改

- 实现了Object接口，把Object大概率会被检测的方法进行了hook

- 实现了RegExp接口，对RegExp进行代理。如果有调用正则来检测堆栈等等可以被捕获到

- 实现了DOMException接口，实现throw弹出报错

- 完善了Node接口中的appendChild方法，实现在实际的DOM结构中，一个元素不能成为其自身的子元素，也不能成为其子元素的子元素

- 补充CanvasRenderingContext2D接口部分方法

### 2023-04-23

- 简单实现NamedNodeMap、Attr、TextEncoder、TextDecoder、IDBFactory、HTMLAllCollection、DOMTokenList、ScreenOrientation、Performance、Audio、Selection、CustomEvent、DocumentType、TimeRanges、DOMParser、Range、AbstractRange、DataTransfer、CDATASection、Text、CharacterData、CSSStyleRule、CSSRule、StyleSheet、SVGElement、CSSRuleList、CSSMediaRule、CSSConditionRule、CSSGroupingRule、MessageEvent接口

- 补充了window接口的部分属性和方法

- 完善Node接口中removeChild方法

- 实现完善Blob、URL接口

- 完善TextEncoder接口中的encode方法

# 目前存在的问题

- 大部分接口中对于原型上的获取会报错的问题没有实现

- 大部分接口的属性和方法没有实现

- 框架里面还缺少所需的接口

- 接口中输入错误的参数产生的报错输出( 比如new一个对象没有传入参数的报错 )

- document.all的检测还没过

- 有些属性或者方法的定义在window作用域里面，放到内存中才是正确的做法