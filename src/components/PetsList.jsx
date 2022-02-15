import React from 'react'
function PetsList({ onboardingData, goToPrev }) {


    return (
        <div className='container mt-5'>

            <h2 className="text-primary text-center fw-bold my-4">Résultats de la recherche</h2>

            <div className="row">
                <button
                    onClick={goToPrev}
                    className='col-4 offset-4 btn btn-lg px-4 py-2 btn-secondary'>Retour</button>
            </div>

            <div className="row">
                {
                    onboardingData.map(pet => (
                        <div className='card col-md-4 my-3' key={pet._id}>
                            <img className='img-fluid' src={pet.picUrl} />
                            <div className="card-body">
                                <h6 className="card-title">Quartier : <span className='fw-bold'>{pet.neighborhood}</span></h6>
                                <h6 className="card-title">Genre : <span className='fw-bold'>{pet.gender}</span></h6>
                                <h6 className="card-title">Publié le : <span className='fw-bold'>{new Date(pet.createdAt).toLocaleDateString()}</span> </h6>
                                {pet.description && <h6 className="card-title">Description : <span className='fw-bold'>{pet.description}</span> </h6>}
                                <h6 className="card-title">Numéro de téléphone : <span className='fw-bold'>{pet.phoneNumber}</span></h6>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PetsList