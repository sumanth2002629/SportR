const jwt = require("jsonwebtoken")

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
}

const auth = (req,res,next) => {
    try{        
        if (getTokenFrom(req) === null) 
        {
            return res.status(403).send("Access denied.");
        }

        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
        req.user = decodedToken;
        next();
    }
    catch(e){
        res.status(400).send("Invalid Token");
    }
}

module.exports = auth