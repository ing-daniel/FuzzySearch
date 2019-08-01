const fs = require('fs'),
      Document = require('./models/document'),
      Common = require('./common/constants');

const createDocument = async () =>{
    let document = new Document(fs);

    document.exist(Common.file, function (err, stat) {
        if(err == null) {
            console.log(`Ya se inicializo el archivo ${Common.file}`);
        } else if(err.code == 'ENOENT') {
            document.create(Common.file, '', function (err) {
                if (err) return console.log(err);
                console.log(`Archivo ${Common.file} creado correctamente.`)
            });   
        } else {
            console.log('Ocurrio un error inesperado: ', err.code);
        }
    });
};

createDocument();




