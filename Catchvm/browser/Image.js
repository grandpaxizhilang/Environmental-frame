var Image = function Image(width, height){
    debugger;
    if(catchvm.memory.HTMLElements['image'] == 'undefined'){
        debugger;
    }
    return catchvm.proxy(catchvm.memory.HTMLElements['image']())
}