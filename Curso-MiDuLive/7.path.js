const path = require('node:path')

//barra separadora de carpetas segun OS

console.log(path.sep)

//unir rutas con path join

const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//obtener nombre del fichero

const base = path.basename('/tmp/midu-super-hiper-secret/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-super-hiper-secret/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)