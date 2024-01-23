const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    }    
})

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.comparePass = async function(candidatePass) {
    const isMatch = await bcrypt.compare(this.password, candidatePass)
    return isMatch
}
const User = mongoose.model('User', UserSchema)

module.exports = User;