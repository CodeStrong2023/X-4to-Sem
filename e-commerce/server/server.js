import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Configuración del cliente de MercadoPago
const client = new MercadoPagoConfig({
    accessToken: "APP_USR-8926106177721254-101321-e88fc678918e95823c3fea76b92acb35-593173334"
});

const app = express();
const port = 3000;

// Configurar middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://localhost:8080/feedback",
                failure: "http://localhost:8080/feedback",
                pending: "http://localhost:8080/feedback",
            },
            auto_return: "approved",
        };

        // Crear una nueva preferencia con el cliente configurado
        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al crear la preferencia"
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
});
