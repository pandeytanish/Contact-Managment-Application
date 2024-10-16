const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id : {
type : mongoose.Schema.Types.ObjectId,
required : true,
ref : "User"
    },
    name : {
        type : String,
        required : [true,"please add contact name"],
    },
    email : {
        type : String,
        required : [true,"please add email"],
    },
    phone : {
        type : String,
        required : [true,"please add phone Number"],
    },
},{
    timeStamps : true,
})

module.exports = mongoose.model("Contact", contactSchema);