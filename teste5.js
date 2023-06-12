const data =  require("./fakeData");

module.exports = function(req, res){
    
    const name =  req.query.name;
    const reg = data.find(user => user.name === name);

    res.send(`Usuário ${name} foi lido ${reg.reads} vezes.`);

};