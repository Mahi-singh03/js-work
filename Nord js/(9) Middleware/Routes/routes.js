
const checkAge = (req, res, next) => {
    const age = req.query.age
    
    if(!age) {
        res.send('Please provide your age')
    }
    else if (age < 18) {
        res.send('You are not allowed to access this page')
    } else if(age > 18) {
        res.send('You are allowed to access this page') 
    }
    else {
        next()
    }
}

export { checkAge }