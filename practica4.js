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
    let maxTemp = cities[0].main.temp;

    cities.forEach((city) => {
        let temperatura = city.main.temp;
        if (temperatura > maxTemp){
            maxTemp = temperatura;
        }
    });
    return maxTemp;
}

exports.min_temp = (cities) =>{
    let minTemp = cities[0].main.temp;

    cities.forEach((city) => {
        let temperatura = city.main.temp;
        if (temperatura < minTemp){
            minTemp = temperatura;
        }
    });
    return minTemp;
}

exports.average_temp = (cities) => {
    let acumulador = 0;
    let numCiudades= cities.length;
    
    cities.forEach((city) => {
        let temperatura = city.main.temp;
        acumulador += temperatura;
    });
    return acumlador/ numCiudades;
        
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

