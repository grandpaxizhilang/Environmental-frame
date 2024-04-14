catchvm.memory.tegexp_count = 0
var RegExp = new Proxy(RegExp,{
    construct(target, argArray) {
        

        if(catchvm.memory.tegexp_count > 8){
            console.log(arguments)
            debugger;
        }



        // if(catchvm.memory.tegexp_count > 1){
        //     console.log(arguments)
        //     debugger;
        // }
        catchvm.memory.tegexp_count++
        return new target(...argArray)
    }
})


