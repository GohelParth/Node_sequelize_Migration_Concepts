const { User, Order } = require('../../models');

const InsertUser = async (req, res) => {
    try {
        const { userName } = req.body;

        const isExist = await User.findOne({ where: { userName: userName } });

        if (isExist) {
            throw {
                status: 400,
                message: `This user is already exist with this name : ${userName}'`,
            };
        }
        const user = await User.create(req.body);

        if (!user) {
            throw {
                status: 400,
                message: 'Some error occurred while creating the user.',
            };
        }
        res.status(200).send({
            status: 200,
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        res.status(error.status).send({
            message: error,
        });
    }
};

const AddOrder = async (req, res) => {
    try {
        const { items, user_id } = req.body;
        const addOrder = await Order.create({ items:items, user_id:user_id });

        if (!addOrder) {
            throw {
                status: 400,
                message: 'Some error occurred while creating the order.',
            };
        }
        res.status(200).send({
            status: 200,
            message: 'Order added succefully !',
            data: addOrder,
        });
    } catch (error) {
        console.log("error : ",error);
        res.status(error.status).send({
            message: "",
        });
    }
};

module.exports = {InsertUser,AddOrder};
