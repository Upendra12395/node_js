const {spawn} = require('child_process')

const child = spawn('ls', ['-lh'])

child.stderr.on('stderr', (stderr)=>{
    console.log(`stderr : ${stderr}`)
})
child.stdout.on('data', (data)=>{
    console.log(`stdout : ${data}`)
})

child.on('error', (error)=>{
    console.log(error)
})

child.on('exit', (code, signal)=>{
    if(code){
        console.log(code)
    }
    if(signal){
        console.log(signal)
    }
    console.log("done")
})