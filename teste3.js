const fs = require("fs")
const data =  require("./fakeData");

module.exports = function(req, res) {
    
    
    const name =  req.query.name.toLowerCase().replace(' ', '');

    const index = data.findIndex((elem)=>elem.name.toLowerCase().replace(' ', '') === name)
    data[index] = null

    res.send("success");

};