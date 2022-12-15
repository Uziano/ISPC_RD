// VAMOS A CONECTARNOS A UNA API
const API_URL = 'http://127.0.0.1:8000'

// La solicitud es asincronico, es decir que tendra que esperar a que tenga una respuesta
export const getHeroe = async() => {
    return await fetch(API_URL);
}

export const traerHeroe = [
    {
        id:1,
        nombre: 'BATMAN',
        edad: 45,
        universo: 2
    }
];

export const updateHeroe = async() => {
    return await fetch(API_URL);
}

export const listHeroe = async() => {
    return await fetch(API_URL);
}

export const deleteHeroe = async() => {
    return await fetch(API_URL);
}

export const createHeroe = async() => {
    return await fetch(API_URL);
}