const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta de Login (POST)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí podrías realizar la validación contra una base de datos
    if (username === 'user' && password === 'password') {
        return res.json({ success: true, message: 'Login exitoso' });
    }
    return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
});

// Ruta para la página extra (GET)
app.get('/api/extra', (req, res) => {
    res.json({ message: 'Esta es la página extra' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
