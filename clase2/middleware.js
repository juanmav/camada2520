const middleware = function (req, res, next) {
    console.log('Vino un request!!!!');
    let random = Math.random();
    console.log(req.method);
    if( random > 0.5){
        // Te dejo pasar
        next()
    } else {
        res.status(401).json({ message: 'No estas autorizado'});
    }
};

module.exports = middleware;