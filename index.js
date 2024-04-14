var fs = require('fs')
var catchvm = require('./Catchvm/catchvm.node');
const {VM,VMScript} = require('vm2');


var catchvmcode = catchvm.run({
    proxy:true
},
`
catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format",suffixes: "pdf",type:"text/pdf"}]});
catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"Chrome PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format",suffixes: "pdf",type: "text/pdf"}]});
catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"Chromium PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format",suffixes: "pdf",type:"text/pdf"}]});
catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"Microsoft Edge PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format",suffixes: "pdf",type:"text/pdf"}]});
catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"WebKit built-in PDF",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf"},{description: "Portable Document Format",suffixes: "pdf",type:"text/pdf"}]});
    
`);


const codefile = `${__dirname}/code.js`;
const vm = new VM();
const script = new VMScript(catchvmcode + fs.readFileSync(codefile),`${__dirname}/NOWDEBUG.js`);
debugger;

function get_result(){
    var res = vm.run(script);
    return res;
};

// vm.run(script) 

console.log(get_result())


debugger;



