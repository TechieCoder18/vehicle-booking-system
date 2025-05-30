const { sequelize } = require("../../db/db");

module.exports = async (req, res) => {
    try {


        const vehicleType = req.body.vehicleType;

        const models = await sequelize.query(`SELECT
	vehicles.id, 
	vehicles.model
FROM
	vehicles
WHERE
	vehicles.type_id = ${vehicleType}`, {
            type: sequelize.QueryTypes.SELECT,
        })



        res.json({ success: 'ok', models: models });


    }

    catch (e) {
        res.json({ success: 'error', message: e.message });
    }
}