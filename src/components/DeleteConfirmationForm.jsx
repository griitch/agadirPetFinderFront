import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

function DeleteConfirmationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    let navigate = useNavigate();

    return (
        <form
            className="d-flex
            justify-content-center align-items-center
            flex-column min-vh-100 container"
            onSubmit={handleSubmit(data => {
                setButtonDisabled(true);
                const options = {
                    method: "DELETE",
                    body: JSON.stringify({ confirmationToken: data.code }),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    }
                }

                fetch('https://agadirpetfinder.herokuapp.com/posts', options).then(r => r.json()).then(r => {
                    if (r.message) {
                        alert(r.message)
                    } else if (r.deleted) {
                        alert("Suppression réussie")
                        navigate("/")
                    }
                }).finally(() => setButtonDisabled(false))
            })} >
            <h1 className='text-primary fw-bold mb-3 text-center'>Suppression d'annonce</h1>
            <h2 className='text-center'>Entrez le code qu'on vous a envoyé par email</h2>
            <input className='form-control my-3 border-2' style={{ width: "60%" }} {...register("code", { required: true })} />
            {errors.code && (<div className="px-5 alert-danger alert">veuillez entrez le code</div>)}
            <button
                disabled={buttonDisabled}
                className='btn btn-primary btn-lg px-5 text-white'>Valider</button>
            <button
                disabled={buttonDisabled}
                type='button'
                onClick={() => navigate("/")}
                className='btn btn-secondary mt-3 btn-lg px-5 text-white'>Retour</button>
        </form>
    )
}

export default DeleteConfirmationForm