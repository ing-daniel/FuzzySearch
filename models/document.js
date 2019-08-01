
class Document {

    constructor(fs) {
        this.fs = fs;
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {string} contenido Contenido del archivo a escribir.
     * @param {function} handler que maneja el evento al termino del mismo
     */
    create(archivo, contenido = '', handler) {
        this.fs.writeFile(`./${archivo}`, contenido, handler);
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {function} handler que maneja el evento al termino del mismo
     */
    read(archivo, handler) {
        this.fs.readFile(archivo, 'utf8', handler);
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {function} handler que maneja el evento al termino del mismo
     */
    exist(archivo, handler){
        this.fs.stat(archivo, handler);
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {string} texto información que se escribira dentro del archivo
     * @param {function} handler que maneja el evento al termino del mismo
     */
    write(archivo, texto, handler){
        this.fs.appendFile(archivo, `${texto.trim()},\n`, 'utf8', handler);
    }
}


module.exports = Document