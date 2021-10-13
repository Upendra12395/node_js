function longCompution(){
    let sum =0, power = Math.pow(10,9)
    for(let i =1; i< power; i++){
        sum += i
    }
    return sum
}

process.on('message', (message)=>{
    if(message === 'start'){
        const sum = longCompution()
        process.send(sum)
    }
})