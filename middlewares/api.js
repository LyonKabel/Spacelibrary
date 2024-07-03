const checkAccept = (req, res, next) => {
    const ctype = req.get('Accept') ||''
    res.locals.isBrowser = ctype.indexOf('application/json') < 0
    next()
}

module.exports = {checkAccept}