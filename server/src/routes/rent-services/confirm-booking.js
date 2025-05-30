const { sequelize } = require("../../db/db");

module.exports = async (req, res) => {
    const t = await sequelize.transaction();
    try {


        const data = req.body.data;

        const check = await sequelize.query(`SELECT
	bookings.id
FROM
	bookings
WHERE
	bookings.vehicle_id = ${data.model} AND (
	bookings.start_date <= '${data.dateRange[1]}'  AND
	bookings.end_date >= '${data.dateRange[0]}')`, {
            type: sequelize.QueryTypes.SELECT
        })


        if (check.length > 0) {

            res.json({ success: 'error', message: 'Vehicle is already booked for the selected date.' });

        }


        else {

            const insert_user_data = await sequelize.query(`INSERT INTO user (first_name, last_name) Values ('${data.firstName}', '${data.lastName}')`, {
                type: sequelize.QueryTypes.INSERT,
                transaction: t,
            })

            const user_id = insert_user_data[0];

            const type = await sequelize.query(`INSERT INTO bookings (user_id, vehicle_id, start_date, end_date, booking_created_date) Values (${user_id}, ${data.model}, '${data.dateRange[0]}', '${data.dateRange[1]}', now())`, {
                type: sequelize.QueryTypes.INSERT,
                transaction: t,
            })

            res.json({ success: 'ok', message: 'Confirmation - Your vehicle has been booked successfully' });
        }

        await t.commit();


    }

    catch (e) {
        await t.rollback();
        res.json({ success: 'error', message: e.message });
    }
}