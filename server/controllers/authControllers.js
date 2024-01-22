const login = (req, res) => {
    res.send('login success')
}

const register = (req, res) => {
    res.send('register success')
}

const getAllUsers = (req, res) => {
    res.send('get all users success')
}


module.exports = {
    login,
    register,
    getAllUsers
}