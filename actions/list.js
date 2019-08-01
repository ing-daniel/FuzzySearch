const fs        = require('fs'),
      Document  = require('./../models/document'),
      Common    = require('./../common/constants');

const document = new Document(fs);

const leerDocument = async () =>{
    document.read(Common.file, function (err, data) {
        if (err) return console.log(`Ocurrio un error al leer el archivo: Detalle: ${err}`);
        
        try {
            let info = data.slice(0,data.length - 2);
            let lista = JSON.parse(`[${info}]`); 
            
            if(lista.length > 0){
                lista.sort(function (a, b) {
                    if (a.name > b.name) { return 1;}
                    if (a.name < b.name) { return -1;}
                    return 0;
                });
            }

            console.log(lista);
        } catch (error) {
            console.log(`Ocurrio un error al operar la información del archivo. Detalle: ${error}`);
        }
    });
};


document.exist(Common.file, function (err, stat) {
    if(err == null) {
        leerDocument();
    } else if(err.code == 'ENOENT') {
        document.create(Common.file, '', function (err) {
            if (err) return console.log(err);
            leerDocument();
        });   
    } else {
        console.log('Ocurrio un error inesperado: ', err.code);
    }
});



