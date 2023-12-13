import logo from './logo.svg';
import './App.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { CategorySchema } from './CategorySchema';
import { useForm, useWatch } from 'react-hook-form';
import * as yup from 'yup';

function App() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(CategorySchema),
    });

    const onSubmit = (values) => {

    }

    const inputWatch = useWatch()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Name</label>
            <input type="text" {...register("name")} required />
            {errors?.name?.message ?? ""}
            <br />
            <label htmlFor="">quantityPerUnit</label>
            <input type="text" {...register("quantityPerUnit")} />
            {errors?.quantityPerUnit?.message && <p style={{ color: "red" }}>{errors?.quantityPerUnit?.message}</p>}
            <br />
            <label htmlFor="">unitsInStock</label>
            <input type="number" {...register("unitsInStock")} />
            {errors?.unitsInStock?.message && <p>{errors?.unitsInStock?.message}</p>}

            <button type="submit">Add</button>
        </form>




    );
}

export default App;
