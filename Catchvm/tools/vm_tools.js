//更改浏览器的某些参数 常用的 
// catchvm.memory.plugin.new({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format1",suffixes: "pdf",type: "text/pdf"}]})

catchvm.AddPlugin = function(data){
    if(catchvm.memory.PluginArray.temp == undefined){
        catchvm.memory.PluginArray.temp = [];
    }
    catchvm.memory.PluginArray.temp.push(data)
};

