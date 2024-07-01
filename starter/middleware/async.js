const asyncWrapper = (fn) => {
    return async (req, res, nest) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = asyncWrapper