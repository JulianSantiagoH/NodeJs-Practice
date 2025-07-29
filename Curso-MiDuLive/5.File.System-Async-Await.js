const fs = require('node:fs/promises');

    (async () => {
        console.log('Leyendo el primer archivo')

        fs.readFile('./archivo.txt', 'utf-8')
            .then(text => {
                console.log('Primer Texto', text)
            })


        console.log('Hacer cosas mientras lee el archivo')


        console.log('Leyendo el Segundo archivo')

        fs.readFile('./archivo2.txt', 'utf-8')
            .then(text => {
                console.log('Segundo Texto', text)
            })

    }

    )()

