require('dotenv').config()
require('./db')
let hook = require('./helpers/hook.helper')


let charactersModel = require('./models/characters')
let colaboratorsModel = require('./models/colaborators')
const moment = require("moment");

let heroes = ['Iron Man', 'Captain America']// aqui podemos agregar el resto de heros del cual deseemos obtener información

let processCreators = async function () {

    for (let item of heroes) {
        let mapCreators = {}
        let resp = await hook.exec('characters', 'get', {name: item})
        console.log('Comienza', item)
        //console.log(resp.data.results)
        resp = resp.data.results[0]
        let comics = await hook.exec('characters/' + resp.id + '/comics', 'get')
        for (let jtem of comics.data.results) {
            let creators = jtem.creators.items
            for (let ktem of creators) {
                if (!mapCreators[ktem.role]) {
                    mapCreators[ktem.role] = []
                }
                if (!mapCreators[ktem.role].includes(ktem.name)) {
                    mapCreators[ktem.role].push(ktem.name)
                }

                console.log('Procesando...')
            }
        }
        let col = await colaboratorsModel.findOne({heroe: item})
        if (!col) {
            col = new colaboratorsModel({heroe: item})
        }
        col.last_sync = moment()
        col.roles = mapCreators
        console.log('finalizo', item)
        await col.save()

        // console.log('comics', comics.data.results[0].creators.items)
    }
}

let processCharacters = async function () {

    for (let item of heroes) {
        let mapCreators = {}
        let resp = await hook.exec('characters', 'get', {name: item})
        console.log('Comienza', item)
        //console.log(resp.data.results)
        resp = resp.data.results[0]
        let comics = await hook.exec('characters/' + resp.id + '/comics', 'get')

        console.log('ladata * * * ** * ', comics.data.results[0].characters.items)
        console.log('title  * * * ** * ', comics.data.results[0].title)


        for (let jtem of comics.data.results) {

            let characters = jtem.characters.items.map(item => item.name)

            for (let ktem of characters) {
                if (!mapCreators[ktem]) {
                    mapCreators[ktem] = []
                }
                if (!mapCreators[ktem].includes(ktem)) {
                    mapCreators[ktem].push(jtem.title)
                }

                console.log('Procesando...')
            }
        }
        let arr = []

        for (let [key, val] of Object.entries(mapCreators)) {
            arr.push({
                character: key,
                comics: val
            })

        }


        let col = await charactersModel.findOne({heroe: item})
        if (!col) {
            col = new charactersModel({heroe: item})
        }
        col.last_sync = moment()
        col.characters = arr
        console.log('finalizo', item)
        await col.save()

        // console.log('comics', comics.data.results[0].creators.items)
    }

    process.exit()
}

processCreators()
processCharacters()
