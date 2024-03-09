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
    let tempMedia = this.average_temp(cities);
    let ciudadesMasCalientes = cities.filter((city) => {
        let temperatura = city.main.temp;
        return temperatura > tempMedia;
    });
    let nombreCiudad = ciudadesMasCalientes.map((city) => city.name);
    return nombreCiudad;
}

exports.max_north = (cities) => {
    let ciudadAlNorte = cities[0];

    cities.forEach((city) => {
        let latitud = city.coord.lat;
        if(latitud> ciudadAlNorte.coord.lat){
            ciudadAlNorte = city;
        }
    });

    return ciudadAlNorte;
}

exports.max_south = (cities) => {
    let ciudadAlSur = cities[0];

    cities.forEach((city) => {
        let latitud = city.coord.lat;
        if(latitud< ciudadAlSur.coord.lat){
            ciudadAlSur = city;
        }
    });

    return ciudadAlSur;

}

exports.gravity_center = (cities) => {
    let suma = 0;
    let longitud = cities.reduce((longitud_acum, city) => {
        return longitud_acum += city.coord.lon;
    }, suma);

    let latitud = cities.reduce((latitudAcum, city) => {
        return latitudAcum += city.coord.lat;
    }, suma);

    let longitudMedia = longitud/cities.length;
    let LatitudMedia = latitud/cities.length;

    return{
        lond : longitudMedia,
        lat : LatitudMedia
    };
}

exports.closest_GC = (cities) => {
    let distaciaMinima = getDifereciaConMedia(cities, cities[0]);
    let nombreCiudad = "";

    cities.forEach((city) => {
        let distance = getDifereciaConMedia(cities, city);
        if (distance < distaciaMinima){
            distanciaMinima = distance;
            nombreCiudad = city.name;
        }
    });
    return nombreCiudad;
    }



