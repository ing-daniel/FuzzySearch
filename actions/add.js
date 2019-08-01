const fs = require('fs');
const readline = require('readline');
const Document = require('./../models/document');
const Common = require('./../common/constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el objeto en formato JSON: ', (answer) => {
  let document = new Document(fs);

  try {
    JSON.parse(answer);

    document.write(Common.file, answer, function(err){
      if(err){
        console.log(`Error al intentar escribir en el documento. Detalle: ${err}`);
        rl.close();
      } 
      console.log('Usuario agregado.');
      rl.close();
    })
  
  } catch (error) {
    console.log(`No se agrego el usuario. Verifique que el texto este en formato JSON válido e intente de nuevo.`);
    rl.close();
  }
}); 
