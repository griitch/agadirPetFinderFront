import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

function AddPetForm() {
    const fileInputref = useRef(null);
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {

        const fd = new FormData();
        fd.append("picture", file,)

        Object.entries(data).forEach(entry => {
            fd.append(entry[0], entry[1])
        })

        const options = {
            method: "POST",
            body: fd
        }

        fetch('http://localhost:8081/posts', options).then(r => r.json()).then(console.log)

    }
    const [file, setFile] = useState(null);

    return <form onSubmit={handleSubmit(submitHandler)} >
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "50%"
        }}>

            <input  {...register("animal")} type="text" placeholder='animal' />
            <input {...register("breed")} type="text" placeholder='breed' />
            <input {...register("gender")} type="text" placeholder='gender' />
            <input {...register("neighborhood")} type="text" placeholder='neighborhood' />
            <input {...register("email")} type="email" placeholder='email' />
            <input {...register("phoneNumber")} type="text" placeholder='phoneNumber' />
            <textarea {...register("description")} placeholder="description" cols="30" rows="10"></textarea>

        </div>
        <br />
        <input
            style={{ display: "none" }}
            ref={fileInputref}
            onChange={e => {
                setFile(e.target.files[0])
            }} type="file" /> <br />
        <button type='button' onClick={() => fileInputref.current?.click()} >Add file</button>
        <button>submit</button>
    </form>

}

export default AddPetForm