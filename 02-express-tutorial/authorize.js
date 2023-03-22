const authorize = (req ,res , next)=>{
    const {user} = req.query
    if(user === 'Ansh'){
        // not only did we query for the parameter we also added it into the req object below
        req.user = {name : "Ansh" , id : 1}
        next()
    }
    
    else{
        res.status(401).send("Unauthorized");
    }
}

module.exports = authorize 