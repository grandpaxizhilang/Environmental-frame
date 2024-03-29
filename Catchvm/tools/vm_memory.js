var catchvm = {}
//框架运行内存
catchvm.memory = {
    config:{print: false,proxy: false}
};//默认关闭打印

catchvm.memory.HTMLElements = [];
catchvm.memory.listeners = {};
catchvm.memory.Events = [];
catchvm.memory.PluginArray = {};
catchvm.memory.MimeTypeArray = {};

;;;;;;;;;;;;;;;;;;;;