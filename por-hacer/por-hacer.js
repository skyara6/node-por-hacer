const fs = require('fs');
let listadoPorHacer = [];

const actualizar = (descripcion, completado = true) => {


    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {


    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}


const guardarDB = () => {
    let dat = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/dat.json`, dat, (err) => {
        if (err) {
            throw new Error('No se pudo grabar el archivo', err);
        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/dat.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    //console.log(descripcion);
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();



    return porHacer;
}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
};