import * as yup from "yup"

export const CategorySchema = yup.object().shape({
    name: yup.string().required(),
    quantityPerUnit: yup.string().required(),
    unitsInStock: yup.number().required().positive().integer().min(50),
})