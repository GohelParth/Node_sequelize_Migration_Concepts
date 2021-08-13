const { User, Order } = require('../../models');


/* This is a controller which will get the user from User table and 
and  there is a one condition for the order table ,
 the condition will get the all orders from the Order table,
  which contains the id:(it is a userId) ,which is define in where conditon
  
  Note : This is one to one relationship example (one user can do only one order)
*/
const getUserHasoneOrder = async (req, res) => {
    try {
        const findAllUsers = await User.findAll({

            include: [{
                model: Order,
                as: 'User_Orders', // optional
                attributes: ['user_id', 'items'] // any specific field from record
            }],
            // where: { id: 1 }
        });

        if (findAllUsers) {
            res.status(200).send({
                status: 200,
                message: "User retrived successfully !",
                data: findAllUsers,
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

async function getOrderbelongsToUser(req, res) {
    try {
        const findAllUsers = await Order.findAll({

            include: [{
                model: User,
                as: 'Username', // optional
                attributes: ['id', 'userName'] // any specific field from record
            }],
            where: { id: 1 }
        });

        if (findAllUsers) {
            res.status(200).send({
                status: 200,
                message: "Order retrived successfully !",
                data: findAllUsers,
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

module.exports = { getUserHasoneOrder, getOrderbelongsToUser }