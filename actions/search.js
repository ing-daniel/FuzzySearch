const   readline  = require("readline"),
        fs        = require("fs"),
        Document  = require('./../models/document'),
        Common    = require('./../common/constants'),
        Functions = require('./../common/functions');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const document = new Document(fs);

const leerDocument = async (texto) =>{
    document.read(Common.file, function (err, data) {
        if (err) return console.log(`Ocurrio un error al leer el archivo: Detalle: ${err}`);
        
        try {
            let info = data.slice(0,data.length - 2);
            let lista = JSON.parse(`[${info}]`); 
            let coincidence = 0;
            let indexElement = -1;

            lista.forEach((element, index) => {
                if(element['name'] != undefined){
                    const number = Functions.fuzzy_search(element['name'], texto);
                    if(coincidence < number){
                        coincidence = number;
                        indexElement = index;
                    }
                }
            });

            const selected = lista[indexElement];
            console.log(selected == undefined ? 'Sin coincidencias': selected);

        } catch (error) {
            console.log(`Ocurrio un error al operar la información del archivo. Detalle: ${error}`);
        } finally {
            rl.close();
        }
    });
};

rl.question('Ingresa la busqueda en formato JSON: ', (answer) => {
    try {
        let object = JSON.parse(answer)
        if(object.hasOwnProperty('search')){
            leerDocument(object['search']);    
        }
        else{
            console.log('Es necesario que el objeto contenga la propiedad search.')
            rl.close();
        }
    } catch (error) {
      console.log(`No se realizo la búsqueda. Verifique que el texto este en formato JSON válido e intente de nuevo.`);
      rl.close();
    } 
  }); 


