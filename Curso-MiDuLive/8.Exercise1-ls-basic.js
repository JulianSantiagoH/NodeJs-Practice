//Replicar la funcionalidad de un ls

const fs = require('node:fs')

fs.readdir('.',(err,files)=>{
    if (err){
        console.error('Error', err)
        return
    } 

    files.forEach(file=>{
        console.log(file)
    })

})