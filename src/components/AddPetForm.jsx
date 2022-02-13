import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { quartiers } from '../lib/quartiers';
import UploadSignSvg from './UploadSignSvg.jsx';

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


    const handeFileUpload = (e) => {
        console.log("first")
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            const fr = new FileReader();
            fr.onload = function () {
                console.log(fr)
                setImg(fr.result)
            }
            fr.readAsDataURL(e.target.files[0])
        }
    }

    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null);



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
                <label className="form-label">Email :</label>
            </div>
            <div className="col-sm-6">
                <input className="form-control" {...register("email")} type="email" placeholder='abc@def.ijk' />
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Numéro de télephone  :</label>
            </div>
            <div className="col-sm-6">
                <input className="form-control" {...register("phoneNumber")} type="text" pattern='0[67][0-9]{8}' placeholder='0612345678' />
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-2 offset-sm-2">
                <label className="form-label">Description :</label>
            </div>
            <div className="col-sm-6">
                <textarea className='form-control' {...register("description")}
                    placeholder
                    ="Décrivez en détail l'apparence de l'animal, et mentionnez sa race si vous la reconaissez"
                    rows="4"></textarea>
            </div>
        </div>


        <br />
        <input
            style={{ display: "none" }}
            ref={fileInputref}
            // onChange={e => {
            //     e.target.files[0] &&
            //         setFile(e.target.files[0])
            // }} 

            onChange={handeFileUpload}
            type="file" /> <br />
        {img &&
            <div className="row">
                <img
                    src={img}
                    className="col-sm-4 offset-sm-5 my-3"
                    style={{ maxHeight: "300px", maxWidth: "100%" }} />

            </div>
        }

        <div className="row">
            <button
                className="col-md-4 offset-md-4 btn btn-success text-white"
                type='button' onClick={() => fileInputref.current?.click()} >
                <UploadSignSvg height={30} width={30} fill="#fff" />
                <span className='mx-4'>
                    Ajouter une image
                </span>
            </button>
        </div>
        <div className="row">

            <button className="col-md-4 offset-md-4 btn btn-primary text-white mt-3" >Valider</button>

        </div>

    </form >

}

export default AddPetForm