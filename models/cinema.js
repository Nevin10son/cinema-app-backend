const mongoose = require("mongoose")
const schema = mongoose.Schema(
        {
            "title":String,
            "director":String,
            "cast":String,
            "rating":String
        }
)

let cinemamodel = mongoose.model("cinemas",schema);
module.exports = {cinemamodel}