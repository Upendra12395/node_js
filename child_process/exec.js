const {exec} = require('child_process')

//exec('pwd', (error, stdout, stderr)=>{
exec('ls -lh', (error, stdout, stderr)=>{
    if(error){
        console.log(`Error : ${error.message}`)
        return
    }
    if(stderr){
        console.log(`stderr : ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`)
})