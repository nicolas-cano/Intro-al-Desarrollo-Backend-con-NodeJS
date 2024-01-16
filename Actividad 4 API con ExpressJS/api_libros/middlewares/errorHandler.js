const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json(
        { error: err.message || 'Error en el servidor' }
    );
};

module.exports = errorHandler;