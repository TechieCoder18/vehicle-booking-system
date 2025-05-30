const { sequelize } = require("../../db/db");

module.exports = async (req, res) => {
    try {


        const wheels = req.body.wheels;

        const type = await sequelize.query(`SELECT
	vehicle_types.id, 
	vehicle_types.name
FROM
	vehicle_types
WHERE
	vehicle_types.wheels = ${wheels}`, {
            type: sequelize.QueryTypes.SELECT,
        })



        res.json({ success: 'ok', type: type });


    }

    catch (e) {
        res.json({ success: 'error', message: e.message });
    }
}