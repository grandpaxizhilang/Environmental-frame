catchvm.memory.tegexp_count = 0
var RegExp = new Proxy(RegExp,{
    construct(target, argArray) {
        
        // if(argArray[0].indexOf('vm') != -1){
        //     argArray[0] = 'repl|bootstrapNodeJSCore|tryModuleLoad|evalmachine|runInContext'
        //     debugger;
        // }

        // console.log(arguments)
        // debugger;

        

        catchvm.memory.tegexp_count++
        return new target(...argArray)
    }
})


