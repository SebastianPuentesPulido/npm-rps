# Piedra Papel y Tijeras en Javascript
Un ejemplo sencillo de como usar inquirerJS con File System, puedes jugar con la maquina y usar un nombre de usuario, las partidas se gurdan en un archivo llamado *partidas.txt* 

## Dependencias:
> en el codigo hago uso de tanto commonJS y ES6 modules, puedes cambiar los archivos y hacer que solo se use un tipo de modulo, yo use commonJS porque me facilitaba el importar funciones, es solo un gusto

-  [inquirerJS](https://www.npmjs.com/package/inquirer#installation)
- [Kleur](https://www.npmjs.com/package/inquirer#installation)
- [nodemon](https://www.npmjs.com/package/nodemon)


## Features
- las partidas se guardan junto con la fecha de ejecución.
- la opcion de la maquina es aleatoria, pues es un numero entero random entre 0 y 3.
- cada valor como piedra, papel y tijeras se le asigna un valor dentro de un arreglo que despues con el resultado aleatorio de la maquina le asignamos un valor.
- colores en la terminal que hacen mas facil el interpretar si ganaste o perdiste.

