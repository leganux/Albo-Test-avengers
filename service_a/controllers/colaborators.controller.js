let colaboratorsModel = require('./../models/colaborators')
const moment = require("moment");


module.exports = {
    getCollaborators: async function (req, res) {
        try {
            let {heroe} = req.params
            let data = await colaboratorsModel.findOne({heroe: heroe}).lean()
            if (!data) {
                res.status(404).json({
                    code: 404,
                    success: false,
                    error: 'Heroe not found',
                    message: 'Internal Server Error'
                })
                return
            }
            let response = {
                last_sync: moment(data.last_sync).format('DD/MM/YYYY HH:mm:ss')
            }
            console.log(data)

            response = {...response, ...data.roles}
            res.status(200).json({
                code: 200,
                success: true,
                data: response,
                message: 'ok'
            })

        } catch (e) {
            console.error(e)
            res.status(500).json({
                code: 500,
                success: false,
                error: e,
                message: 'Internal Server Error'
            })
        }

    }
}
