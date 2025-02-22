import * as Joi from 'joi'

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEAFAULT_LIMIT: Joi.number().default(6)
})