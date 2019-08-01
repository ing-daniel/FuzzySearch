# FuzzySearch

**Consideraciones:**
- Es necesario contar con Node v10.16.0 o superior y  con NPM 6.9.0 o superior



**Instrucciones iniciales** <br>
1 - Abrir termial y posicionarse en la carpeta del proyecto <br>
2 - Ejecutar el script "npm run init" <br>

**Agregar Usuario** <br>
1 - Ejecutar el script "npm run add" <br>
2 - Ingresar el usuario en formato JSON ({"name": "Ejemplo"}) <br>

**Listar Usuarios** <br>
1 - Ejecutar el script "npm run list" <br>

**Buscar Usuario** <br>
1 - Ejecutar el script "npm run fuzzy-search" <br>
2 - Ingresar la búsqueda en formato JSON ({"search": "texto"}) <br>

Para la búsqueda de usuarios se implemento la busqueda lineal o secuancial ya que vamos a comparar elemento por elemento del vector con el valor que buscamos.

Se implemento este algorítmo ya que se considero que es eficaz para listas no muy grandes.
