/*exports.nombreFuncion = (parametros) => {
   
    return valor;
}*/
const fs = require('fs')
const {readFile} = require('fs/promises');

exports.load = async filename => {
    const buffer = await readFile(filename);
    return JSON.parse(buffer);
}

exports.max_temp = (cities) => {
    
}

exports.min_temp = (cities) =>{

}

exports.average_temp = (cities) => {

}

exports.warmer_average_temp =(cities) => {

}

exports.max_north = (cities) => {

}

exports.max_south = (cities) => {

}

exports.gravity_center = (cities) => {

}

exports.closest_GC = (cities) => {

}

