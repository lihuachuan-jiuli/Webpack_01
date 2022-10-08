function getString(){
    return new Promise((resolver, reject) =>{
        // 模拟异步
        setTimeout(()=>{
            resolver('九离九离九离')
        },2000)
    })
}


async function helloWorld() {
    let string = await getString()
    console.log(string)
    
    
}

export default helloWorld
