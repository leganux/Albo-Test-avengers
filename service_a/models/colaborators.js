let mongoose = require('mongoose')
let Schema = mongoose.Schema


let colaboratorSchema = new Schema(
    {
        last_sync: {
            type: Date
        },
        heroe: {
            type: String
        },
        roles: {
            type: Schema.Types.Mixed
        },

    }, {
        timestamps: true
    }
);


module.exports = mongoose.model("colaborator", colaboratorSchema);
