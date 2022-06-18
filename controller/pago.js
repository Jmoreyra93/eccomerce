// SDK de Mercado Pago
import mercadopago from "mercadopago"

// Agrega credenciales
mercadopago.configure({
    access_token: "APP_USR-342471229885554-061607-5edec252b8bdc915e5d97987dd4c07b3-582603325",
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