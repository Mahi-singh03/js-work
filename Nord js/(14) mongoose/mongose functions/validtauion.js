const validations = ()=>{
    const validator = new Validator();
    validator.isLength(req.body.name, { min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long'),
    validator.isNumeric(req.body.age).withMessage('Age must be a number'),
    validator.isEmail(req.body.email).withMessage('Invalid email address')
    return validator.validateSync(req.body); // this will return an object with the validation errors if any
}



module.exports = validations