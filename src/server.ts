import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Jorge',
    'Aluizio',
    'Smart Contacts'
  ]);
});

app.listen(3333);
