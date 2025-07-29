const fs = require('node:fs')

console.log('Leyendo el primer archivo')

const text = fs.readFile('./archivo.txt', 'utf-8', (err,text)=>{
    console.log('Primer Texto',text)
})


console.log('Hacer cosas mientras lee el archivo')


console.log('Leyendo el Segundo archivo')

const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err,text2)=>{
    console.log('Segundo Texto',text2)
})
