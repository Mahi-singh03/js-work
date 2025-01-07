const { body, validationResult } = require('express-validator');

const validations = [
  body('name').isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long'),
  body('age').isNumeric().withMessage('Age must be a number'),
  body('email').isEmail().withMessage('Invalid email address')
];

module.exports = { validations, validationResult };
