/* setTimeout(()=>{
    console.log("hello 1")
}, 4000)

setTimeout(()=>{
    console.log('Hello 2')
}, 2000)

setTimeout(()=>{
    console.log('Hello 3')
}, 1000) */


function fun1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Hello 1');
            resolve()
        },3000)
    })  
}

function fun2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Hello 2');
            resolve()
        }, 2000)
    })
    
}

function fun3() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Hello 3');
            resolve()
        },1000)
    })
    
}

async function fun() {
    await fun1()
    await fun2()
    await fun3()
    
}

fun()