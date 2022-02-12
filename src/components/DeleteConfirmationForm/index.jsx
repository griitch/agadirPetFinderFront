import React from 'react'
import { useForm } from 'react-hook-form';

function DeleteConfirmationForm() {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(data => {
            const options = {
                method: "DELETE",
                body: JSON.stringify({ confirmationToken: data.code }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }

            fetch('http://localhost:8081/posts', options).then(r => r.json()).then(console.log)
        })} >
            <h1>Enter code to delete</h1>
            <input  {...register("code")} type="text" placeholder='Suppression' />
            <button>Submit</button>
        </form>
    )
}

export default DeleteConfirmationForm