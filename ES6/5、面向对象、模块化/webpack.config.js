module.exports={
    mode:"development",
    entry:"./index.js",
    output:{
        path:path.resolve(dirname,'build'),
        filename:'bundle.js'
    }
}