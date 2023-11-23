import React from 'react'
import List from '../../components/admin/List'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from "react-router-dom"
const Dashboard = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: ''
        },
        onSubmit: values => {
            axios.post("https://northwind.vercel.app/api/products", { ...values }).then(res => {
                toast.success("item created")
                console.log(res)
            })
        }
    })
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add
            </button>
            <Link to='/'>Home</Link>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />

                                <label htmlFor="unitPrice">unitPrice</label>
                                <input
                                    id="unitPrice"
                                    name="unitPrice"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.unitPrice}
                                />
                                <button type="button" class="btn btn-primary">Save changes</button>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <List />
        </div>
    )
}

export default Dashboard