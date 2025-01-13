const { body, validationResult } = require('express-validator');

const validations_1 = [
  body('name')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must be between 3 and 20 characters long'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[@$!%*?&#]/)
    .withMessage('Password must contain at least one special character (@, $, !, %, *, ?, &, or #)'),
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
];

const validations_2 = [
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[@$!%*?&#]/)
    .withMessage('Password must contain at least one special character (@, $, !, %, *, ?, &, or #)'),
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
];

module.exports = { validations_1,validations_2, validationResult };
