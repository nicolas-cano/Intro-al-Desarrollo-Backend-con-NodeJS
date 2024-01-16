const express = require('express');

const { auth } = require('express-oauth2-jwt-bearer');

//Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

//Configuramos Middleware con el Servidor de Autorizacion
const autenticacion = auth({
  audience: "https://localhost:3000/api/libros",
  issuerBaseURL: "https://dev-v2bbqnpgml3c260z.us.auth0.com/",
  tokenSigningAlg: "RS256",
}); 

const app = express();
app.use(express.json());

//Importamos el Router de Libros
const librosRouter = require('./routes/libros');

//Configuramos el middleware de autenticacion
app.use('/libros', autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');  
});

