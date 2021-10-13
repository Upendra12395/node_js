const express = require('express')
const {fork} = require('child_process')


const app = express()
const PORT = 3000

app.get('/one', (req, res)=>{
    let sum = longCompute()
    res.json(sum)
})

app.get('/two', async (req, res)=>{
    const sum2 = await longCompution()
    res.json(sum2)

})

app.get('/three', (req, res)=>{
    const child = fork('./computation.js')
    child.send('start')
    child.on('message', (sum)=>{
        res.json(sum)
    })
})

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})

const power = Math.pow(10,9)
function longCompute(){
    let sum = 0
    for(let i =1; i< power ; i++){
        sum += i
    }
    return sum
}

function longCompution(){
    return new Promise((resolve, reject)=>{
        let sum =0
        for(let i=1;i<power;i++){
            sum+= i
        }
        resolve(sum)
    });
}