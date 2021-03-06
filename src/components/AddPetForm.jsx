import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { quartiers } from '../lib/quartiers';
import UploadSignSvg from './UploadSignSvg.jsx';
import FormError from './FormError.jsx';

function AddPetForm() {
    const fileInputref = useRef(null);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null);
    const submitHandler = (data) => {

        const fd = new FormData();
        fd.append("picture", file);

        Object.entries(data).forEach(entry => {
            if (entry[1]) {
                fd.append(entry[0], entry[1])
            }
        })

        const options = {
            method: "POST",
            body: fd
        }

        setButtonDisabled(true)
        fetch('https://agadirpetfinder.herokuapp.com/posts', options)
            .then(r => r.json())
            .then(res => {
                if (!res.message) {
                    navigate("/confirm");
                }
            }).finally(() => setButtonDisabled(false))
    }


    const handeFileUpload = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            const fr = new FileReader();
            fr.onload = function () {
                setImg(fr.result)
            }
            fr.readAsDataURL(e.target.files[0])
        }
    }



    return <form
        className='container-fluid my-5'
        style={{
            width: "85%",
            margin: "auto"
        }}
        onSubmit={handleSubmit(submitHandler)} >

        <h2 className="my-5">Veuillez remplir ce formulaire pour ajouter une annonce : </h2>
        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Animal :</label>
            </div>
            <div className="col-sm-6">
                <select className='form-select' {...register("animal")} type="text"  >
                    <option value="chat">Chat</option>
                    <option value="chien">Chien</option>
                </select>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Genre :</label>
            </div>
            <div className="col-sm-6">
                <select className="form-select" {...register("gender")} type="text" placeholder='gender' >
                    <option value="male">Male</option>
                    <option value="femelle">Femelle</option>
                </select>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Quartier :</label>
            </div>
            <div className="col-sm-6">
                <select className="form-select" {...register("neighborhood")} type="text" placeholder='neighborhood' >
                    {
                        quartiers.map(q => <option key={q}>{q}</option>)
                    }
                </select>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Email* :</label>
            </div>
            <div className="col-sm-6">
                <input className="form-control" {...register("email", { required: true, type: "email" })} placeholder='abc@def.ijk' />
            </div>
        </div>
        {errors.email && <FormError message={"veuillez entrer un email valide"} />}

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Num??ro de t??lephone* :</label>
            </div>
            <div className="col-sm-6">
                <input className="form-control" {...register("phoneNumber", { required: true, pattern: '0[67][0-9]{8}' })} type="text" placeholder='0612345678' />
            </div>
        </div>
        {errors.email && <FormError message={"veuillez entrer un num??ro de t??lephone valide"} />}

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Description : <br />
                    <span
                        style={watch("description")?.length >= 250 ? { color: "red" } : { color: "inherit" }}
                    ><b>Nombre de caract??res :
                            {" "} {watch("description")?.length || 0}
                        </b>
                    </span>
                </label>
            </div>
            <div className="col-sm-6">
                <textarea className='form-control' {...register("description")}
                    placeholder
                    ="D??crivez en d??tail l'apparence de l'animal,
                     et mentionnez sa race si vous la reconaissez. Ne d??passez pas 250 caract??res "
                    rows="4"></textarea>
            </div>
        </div>


        <br />
        <input
            style={{ display: "none" }}
            ref={fileInputref}
            onChange={handeFileUpload}
            type="file" /> <br />
        {img &&
            <div className="row">
                <img
                    src={img}
                    className="col-md-4 offset-sm-4 my-3"
                    style={{ maxHeight: "400px", maxWidth: "550px" }} />
            </div>
        }
        <div className="row">
            <button
                disabled={buttonDisabled || (watch("description")?.length >= 250)}
                className="col-md-4 offset-md-4 btn btn-success text-white"
                type='button' onClick={() => fileInputref.current?.click()} >
                <UploadSignSvg height={30} width={30} fill="#fff" />
                <span className='mx-4'>
                    Ajouter une image
                </span>
            </button>
        </div>
        <div className="row">

            <button
                disabled={buttonDisabled || (watch("description")?.length >= 250)}
                className="col-md-4 offset-md-4 btn btn-primary text-white mt-3" >Valider</button>

        </div>
        <div className="row">
            <button
                disabled={buttonDisabled || (watch("description")?.length >= 250)}
                type='button'
                onClick={() => navigate("/")}
                className='col-md-4 offset-md-4 btn btn-secondary text-white mt-3'>Retour</button>
        </div>

    </form >

}

export default AddPetForm