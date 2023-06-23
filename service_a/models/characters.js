let mongoose = require('mongoose')
let Schema = mongoose.Schema


let charactersSchema = new Schema(
    {
        last_sync: {
            type: Date
        },
        characters: [{
            character: String,
            comics: [{
                type: String
            }]
        }],
        heroe: {
            type: String
        },


    }, {
        timestamps: true
    }
);


module.exports = mongoose.model("characters", charactersSchema);
