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
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        await user.comparePass(password)
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
        const usersAll = await User.find({})
        res.status(200).json({
            status: 'success',
            nbHits: usersAll.length,
            msg: usersAll
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