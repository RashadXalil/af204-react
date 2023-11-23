import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
const Signup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(10, 'Must be 10 characters or less').required("bunu yazmaq mutleqdir"),
            lastName: Yup.string().max(15, "max 15 ola biler").required("bu field mutleqdir"),
            email: Yup.string().email('Invalid email address').required("email mutleq yazilmalidir")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.firstName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.firstName}</div> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Signup