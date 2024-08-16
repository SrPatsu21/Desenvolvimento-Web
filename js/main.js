// main.js
const ola_mundo = "Olá, mundo!";
const posts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(err => console.log(err));
}

export {ola_mundo, posts};