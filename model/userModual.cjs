const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs') //hashedPassword     //encryption Password //comparePassword

const userSchema = mongoose.Schema({
    name: "String",
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: "String"
})

userSchema.methods.comparePassword = async function (password) { //comparePassword
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Users', userSchema)



