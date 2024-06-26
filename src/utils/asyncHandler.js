const asynchandler = (requesthandler) => {
    return (res,req,next) => {
        Promise.resolve(requesthandler(req,res,next)).catch((err) => next(err))
    }
}

export {asynchandler}