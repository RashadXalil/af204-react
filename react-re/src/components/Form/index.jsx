import React from 'react'

const Form = ({ handleAddNotesForm, formData, setFormData }) => {
    // {title: "ssdad", desc: "ssdfdf", color: "", id:""}
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, id: new Date().getTime() })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddNotesForm()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add new note</h3>
            <input type="text" name='title' value={formData.title} placeholder='Title' onChange={handleChange} /> <br /> <br />
            <textarea name="desc" id="desc" cols="30" rows="10" onChange={handleChange}></textarea> <br /> <br />
            <div className="colors">
                <input type="radio" name="color" id='red' value='red' onChange={handleChange} /><label htmlFor="red">Red</label>
                <input type="radio" name="color" id='purple' value='purple' onChange={handleChange} /><label htmlFor="purple">Purple</label>
                <input type="radio" name="color" id='yellow' value='yellow' onChange={handleChange} /><label htmlFor="yellow">Yellow</label>
            </div>
            <button type='submit'>Add new</button>
        </form>
    )
}

export default Form