let axios = require('axios')
let crypto = require('crypto');
let moment = require('moment')

let md5 = function (data) {
    return crypto.createHash('md5').update(data).digest("hex");
}


module.exports = {

    exec: async function (path, method, data = {}) {
        method = method.toLowerCase()

        let ts = moment().format('x')
        let hash = md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
        let url = process.env.API_BASE + path + '?apikey=' + process.env.PUBLIC_KEY + '&hash=' + hash + '&ts=' + ts

        if (!'post,get,put,patch,delete,options'.split(',').includes(method)) {
            throw new Error('Método invalido')
        }
        let options = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        let rsp = {}
        try {
            if (method == 'get') {
                for (let [key, val] of Object.entries(data)) {
                    url = url + '&' + key + '=' + val
                }
                rsp = await axios.get(url, options)
                return rsp.data
            }

            rsp = await axios[method](url, data, options)
            return rsp.data

        } catch (e) {
            console.error(e)
            throw e
        }

    }
}
