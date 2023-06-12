const data =  require("./fakeData");

const getUser = ( req, res ) => {
    
    const name =  req.query.name.toLowerCase().replace(' ', '');
    const index = data.findIndex((elem)=>elem.name.toLowerCase().replace(' ', '')===name)
    const result = {...data[index]}
    data[index].reads++
    delete result.reads
    res.send(result)

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};