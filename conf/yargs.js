const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendinte la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Crea un archivo la tabla de multiplicar', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}