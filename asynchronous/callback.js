/* setTimeout(()=>{
    console.log("hello 1")
}, 4000)

setTimeout(()=>{
    console.log('Hello 2')
}, 2000)

setTimeout(()=>{
    console.log('Hello 3')
}, 1000) */

function fun1(callback){
    setTimeout(()=>{
        console.log('Hello 1')
        callback()
    },4000)
}

function fun2(callback){
    setTimeout(()=>{
        console.log('hello 2')
        callback()
    }, 2000)
}

function fun3(callback){
    setTimeout(()=>{
        console.log('Hello 3')
        callback()
    }, 1000)
}
fun1(()=>{
    //console.log('in first fun call')
    fun2(()=>{
        //console.log('in second fun call')
        fun3(()=>{
            //console.log('In third fun call')
        })
    })
})