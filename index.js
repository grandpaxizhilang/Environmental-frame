var fs = require('fs')
var catchvm = require('./Catchvm/catchvm.node');
const {VM,VMScript} = require('vm2');


var catchvmcode = catchvm.run({
    proxy:true
},
`
    catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"PDF Viewer",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf1"},{description: "Portable Document Format1",suffixes: "pdf",type: "text/pdf3"}]});
    catchvm.AddPlugin({description:"Portable Document Format" ,filename:"internal-pdf-viewer",name:"PDF Viewer3",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/pdf2"},{description: "Portable Document Format4",suffixes: "pdf",type: "text/pdf"}]})
`);


const codefile = `${__dirname}/code1.js`;
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



