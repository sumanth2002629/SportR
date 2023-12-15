const jwt = require("jsonwebtoken")
const userModel = require("../models/User")

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
}

const auth = (req,res,next) => {
    const userModel = require("../models/User")
    // console.log(getTokenFrom(req));
    try{        
        if (getTokenFrom(req) === null) 
        {
            return res.status(403).send("Access denied.");
        }

        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
        req.user = decodedToken;

        const user = userModel.findById(req.user.id)
        // console.log("User is", user)
        if(!user){
            // console.log("reached here")
            return res.status(404).send("User not found");
        }
        
        next();
        
    }
    catch(e){
        res.status(400).send("Invalid Token");
    }
}

module.exports = auth