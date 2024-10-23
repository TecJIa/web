const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Роут для /js-app/
app.get('/js-app/', (req, res) => {
    res.send(`OTUS 2024, Hello! It is Node.js! Hostname: ${os.hostname()}`);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
});
