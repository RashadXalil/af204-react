import { useRef } from "react";
import Murad from "./components/Murad";
function App() {
    const nameRef = useRef()
    const surnameRef = useRef()
    const ageRef = useRef()
    const addUser = () => {
        const newUser = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            age: ageRef.current.value
        }
    }
    return (
        <div className="App">
            <input type="text" placeholder="name" ref={nameRef} />
            <input type="text" placeholder="surname" ref={surnameRef} />
            <Murad ref={ageRef} />
            <button onClick={addUser}>add</button>
        </div>
    );
}

export default App;
