import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');
    response.json([
        'Tiago',
        'Melissa',
        'Luigi',
        'Rafaela',
        'Rafael'
    ]);
});

app.listen(3333);