const User = require("../models/User")

const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: user
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }

}

const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        res.status(200).json({
            status: 'success',
            msg: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            msg: error
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            status: 'success',
            nbHits: users.length,
            msg: users
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            msg: error
        })
    }

}


module.exports = {
    login,
    register,
    getAllUsers
}