import React from 'react';
import { useForm } from 'react-hook-form';
import { quartiers } from '../lib/quartiers';

function PetsFilter({ goToNext, setOnboardingData, goToPrev }) {
    const { register, handleSubmit } = useForm();

    return (
        <form className='container-fluid my-5'
            style={{
                width: "85%",
                margin: "auto"
            }}
            onSubmit={handleSubmit(data => {
                const dataWnoEmptyStrings = {};
                for (let key in data) {
                    if (data[key]) {
                        dataWnoEmptyStrings[key] = data[key]
                    }
                }
                const queryString = new URLSearchParams(dataWnoEmptyStrings).toString()
                fetch('https://agadirpetfinder.herokuapp.com/posts?' + queryString, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    }, method: "GET",
                }).then(r => r.json())
                    .then(res => {
                        if (res?.length === 0) {
                            alert("Aucun animal trouvé")
                        } else {
                            setOnboardingData(res);
                            goToNext()
                        }
                    }).catch()

            })}>

            <h2 className="my-5 text-center">Donnez des informations sur l'animal que vous cherchez : </h2>
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
                            [<option key="0" value="">Tous les quartiers</option>,
                            ...quartiers.map(q =>
                                <option value={q} key={q}>{q}</option>)]
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <button className="col-md-4 offset-md-4 btn btn-primary text-white mt-4" >Valider</button>
            </div>

            <div className="row">
                <button
                    type='button'
                    onClick={goToPrev}
                    className='col-md-4 offset-md-4 btn btn-secondary text-white mt-3'>Précédent</button>
            </div>

        </form>
    )
}

export default PetsFilter