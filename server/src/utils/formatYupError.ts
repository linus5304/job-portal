import { ValidationError } from "yup";
import { FieldError } from './../resolvers/user';

export const formatYupError = (err: ValidationError) => {
    const errors: Array<FieldError> = []
    err.inner.forEach(e => {
        errors.push({
            field: e.path as string,
            message: e.message
        })
    })

    return errors
}