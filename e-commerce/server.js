const express = require('express');
const mercadopago = require('mercadopago');
const app = express();
app.use(express.json());

// Configura tus credenciales de MercadoPago
mercadopago.configurations.setAccessToken('TU_CLAVE_PRIVADA');

// Ruta para crear la preferencia
app.post('/crear-preferencia', (req, res) => {
    const preference = {
        items: req.body.items,
        back_urls: {
            success: 'https://tu-sitio.com/success',
            failure: 'https://tu-sitio.com/failure',
            pending: 'https://tu-sitio.com/pending'
        },
        auto_return: 'approved'
    };

    mercadopago.preferences.create(preference)
        .then(function(response) {
            res.json({ id: response.body.id });
        }).catch(function(error) {
            console.log(error);
            res.status(500).send('Error al crear la preferencia');
        });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
