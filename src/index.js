const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./routes/employees'));

// Iniciando el servidor

app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'));
});