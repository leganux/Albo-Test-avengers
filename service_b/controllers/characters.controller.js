let charactersModel = require('./../models/characters')
const moment = require("moment");


module.exports = {
    getCharacters: async function (req, res) {
        try {
            let {heroe} = req.params
            let data = await charactersModel.findOne({heroe: heroe}).lean()
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
                last_sync: moment(data.last_sync).format('DD/MM/YYYY HH:mm:ss'),
                characters: data.characters
            }


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
