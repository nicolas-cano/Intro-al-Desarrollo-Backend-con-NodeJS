const request = require('supertest');
const app = require('../../src/app');

const libroModel = require('../../src/models/libroModel');

//Mockup de Autencticacion
jest.mock('express-oauth2-jwt-bearer', () => {
    return {
        auth: jest.fn().mockImplementation(() => (req, res, next) => next()),
        requiredScopes: jest.fn().mockImplementation(() => (req, res, next) => next()),
    };
});

//Mockup de Mongoose
jest.mock('../../src/models/libroModel');

describe("Libro Api", () => {

    test("GET /libros deberia obtener todos los libros", async () => {
        const mockLibros = [
            { id: "1", title: "Libro 1" }, 
            { id: "2", title: "Libro 2" },
        ];

        libroModel.find.mockResolvedValue(mockLibros);

        const response = await request(app).get("/api/libros");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockLibros);
        expect(libroModel.find).toHaveBeenCalledTimes(1);

    });

    test("POST /libros deberia crear un nuevo libro", async () => {

        const libroCreado = { id: "1", titulo: "Nuevo Libro", autor: "Juan Perez" };

        const libroMock = {
            ...libroCreado,
            save: () => {}
        };

        libroModel.create.mockResolvedValue(libroMock);

        const response = await request(app).post("/api/libros").send(libroMock);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(libroCreado);
        expect(libroModel.create).toHaveBeenCalledTimes(1);
        expect(libroModel.create).toHaveBeenCalledWith(libroCreado);
    });
});