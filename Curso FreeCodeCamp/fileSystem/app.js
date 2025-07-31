const fs = require('fs')



//*Leer el contenido de un archivo

// fs.readFile('indx.html', 'utf-8',(err,contenido)=>{
//     if(err){
//         throw err;
//     } 
    
//     console.log(contenido);
    

//     console.log('Mensaje.....')
// });

//*Cambiar nombre de archivo

// fs.rename('index.html','main.html',(err)=>{
//     if(err){
//         throw err;
//     }

//     console.log('se ha cambiado el nombre correctamente')
// })


//*Agregar contenido al final de un archivo.

// fs.appendFile('index.html', '<p>Agregado con appendFile con node Js</p>',(err)=>{
//     if(err){
//         throw err;
//     }

//     console.log('Se ha agregado una nueva linea de codigo en el archivo html')
// })

//*Reemplazar todo el contenido del archivo

// fs.writeFile('index.html', 'Contenido Nuevo con WriteFile',(err)=>{
//     if(err){
//         throw err;
//     }

//     console.log('Contenido reemplazado exitosamente')
// })


//*Eliminar un archivo

fs.unlink('eliminar.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Se ha eliminado el archivo correctamente')
})
