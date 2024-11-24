const logger =  (req,res,next) => {
    let time = new Date().toLocaleTimeString()

    // create custom req proprty
    req.myTime = time
    //res.json({ middlewareTime: time })
     next()
}


//userlogin
const userRole = (req, res, next) => {
    let { role } = req.query
    if(role === 'admin') {
        req.role = 'admin'
    } else if(role === 'user') {
        req.role = 'user'
    } else {
        req.role = "not matching role"
    }
    next()

}


// passwordValidation
const passwordValidation = (req, res, next) => {
    let { password , conform } = req.body
    let reg = /^[A-Za-z0-9]+$/;

    if(password === conform) {
        if(reg.test(password)) {
        req.msg = 'password are matched and valid'
        req.password = password
        } else {
            req.msg = "password should contain at least one uppercase, one lowercase, one number and one special character"
            req.password = null
        }
    } else {
        req.msg = "password are not matched"
        req.password = null
    }
    next()

}

module.exports = {logger , userRole , passwordValidation }

