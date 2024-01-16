const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  // Código para obtener todos los usuarios de la base de datos
  res.send('Obtener todos los usuarios');
});

// Obtener un usuario por su ID
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  // Código para obtener un usuario por su ID de la base de datos
  res.send(`Obtener usuario con ID ${id}`);
});

// Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  // Código para crear un nuevo usuario en la base de datos
  res.send('Crear un nuevo usuario');
});

// Actualizar un usuario existente
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  // Código para actualizar un usuario existente en la base de datos
  res.send(`Actualizar usuario con ID ${id}`);
});

// Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  // Código para eliminar un usuario de la base de datos
  res.send(`Eliminar usuario con ID ${id}`);
});

