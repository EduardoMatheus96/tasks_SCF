
const authorizer = (req, res, next) => {
    const token = req.headers['authorization']
    console.log(token)

    // O unico token valido para requisições é 000
    if(token === '000'){
        next()
    } else {
        res.status(401).json({
            "messege": "Usuário não autenticado"
        })
    }
}

module.exports = {
    authorizer
}