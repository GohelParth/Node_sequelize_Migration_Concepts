const { User, Order } = require('../../models');

async function getUserHasmanyOrders(req, res) {
    try {
        const getUserOrders = await User.findAll({

            include: [{
                model: Order,
                as: 'User_Orders', // optional
                attributes: ["id", "items", "user_id",] // any specific field from record
            }],
            where: { id: 1 }
        });

        if (getUserOrders) {
            res.status(200).send({
                status: 200,
                message: "User retrived with orders successfully !",
                data: getUserOrders,
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

module.exports = { getUserHasmanyOrders }