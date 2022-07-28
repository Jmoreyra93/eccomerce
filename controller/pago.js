// SDK de Mercado Pago
import mercadopago from "mercadopago"
import dotenv from 'dotenv'

dotenv.config();

// Agrega credenciales
mercadopago.configure({
    access_token: process.env.ACCES_TOKEN,
});

console.log('------ Sistema de pago iniciado -------')


const feedback = (req, res) => {
	let info = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	}
    console.log(info)

    res.redirect('/')
}

export default {
    feedback
}