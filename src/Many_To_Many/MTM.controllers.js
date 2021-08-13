const { Order, PaymentMethod } = require('../../models');

async function Orders_belongsToMany_paymentMethod(req, res) {
    try {
        const OrderMethods = await Order.findAll({
            include: [{
                model: PaymentMethod,
            }],
            // where: { id: 1 }
        });

        if (OrderMethods) {
            res.status(200).send({
                status: 200,
                message: "Order retrived with it's payment methods.",
                data: OrderMethods,
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: error.message,
            data: null,
        })
    }
}

async function PaymentMethods_belongsToMany_Order(req, res) {
    try {
        const OrderMethods = await PaymentMethod.findAll({
            include: [{
                model: Order,
            }],
            // where: { id: 1 }
        });

        if (OrderMethods) {
            res.status(200).send({
                status: 200,
                message: "Payment methods retrived with it's Orders",
                data: OrderMethods,
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: error.message,
            data: null,
        })
    }
}

module.exports = { Orders_belongsToMany_paymentMethod, PaymentMethods_belongsToMany_Order }