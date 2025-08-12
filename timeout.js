console.log("Start")

setTimeout(()=>{
    console.log("Hello")
},2)

await new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("World")
    reject('reject by force.')
    },2000)
})
setImmediate(()=>{
    console.log("Hello World!")
})

process.nextTick(()=> {
    console.log("Hello World! from process.nextTick")
})

console.log("End")

