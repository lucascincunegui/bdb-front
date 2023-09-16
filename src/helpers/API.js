import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:4000'
});

function populateMock(qtd = 8) {
    const mock = [];
    for (let i = qtd; i > 0; i--) {
        mock.unshift({
            nombre: `Test ${i}`,
            valor: Math.random() * 100 * i / qtd,
            link: 'https://segredosdomundo.r7.com/wp-content/uploads/2016/05/5-25.jpg'
        })
    }
    return mock;
}

export async function getProducts() {
    // return populateMock(64);
    return new Promise((resolve, reject) => {
        API.get('/Productos')
            .then(response => resolve(response.data))
            .catch(reject);
    });
}