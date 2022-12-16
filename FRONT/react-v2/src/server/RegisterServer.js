// VAMOS A CONECTARNOS A UNA API
const API_URL = 'http://127.0.0.1:8000/usuario-list/'


// // Registrar un usuario
// export const registerUser = async (newUser) => {
//     console.log(newUser)
//     return await fetch(API_URL,{
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         mode: 'no-cors', //
//         // headers: [],
//         body: JSON.stringify({
//             "mail": String(newUser.mail).trim(),
//             "username": String(newUser.username).trim(),
//             "password": String(newUser.password).trim()
//         })
//     });
// };

