/**
 * Algoritmo de Búsqueda Lineal
 * @param {string} text texto sobre el cual se buscara las coincidencias
 * @param {string} search texto base para la búsqueda
 */
exports.fuzzy_search = (text, search) =>
{
    var search = search.replace(/\ /g, '').toLowerCase();
    var position = 0;

    for (var n=0; n<text.length; n++)
    {
        var text_char = text[n];

        if(position < search.length &&
          text_char.toLowerCase() == search[position])
          position += 1;
    }

    return position;
}
