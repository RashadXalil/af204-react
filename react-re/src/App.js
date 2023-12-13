import { useEffect, useState } from "react";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToSTR, getNotesFromSTR } from "./redux/noteSlice";
import List from "./components/List";
function App() {
    const [formData, setFormData] = useState({})
    const notes = useSelector(state => state.notes.items);
    const dispatch = useDispatch();

    const handleAddNotesForm = () => {
        dispatch(addNoteToSTR(formData))
    }
    return (
        <div className="App">
            <Form handleAddNotesForm={handleAddNotesForm} formData={formData} setFormData={setFormData} />
            <List />
        </div>
    );
}

export default App;
