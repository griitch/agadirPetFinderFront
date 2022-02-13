/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CatDogSvg from './CatDogSvg.jsx'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='d-flex
        justify-content-center align-items-center
        flex-column min-vh-100 container my-4'>
            <CatDogSvg fill="orange" height="230" width="230" />
            <div className='container'>
                <div className="row pt-4 pb-2 justify-content-center">
                    <Link to="/browse" className='btn btn-primary col-md-4 py-3 m-2 text-white'>Je cherche un animal</Link>
                    <Link to="/add" className='btn btn-primary col-md-4 m-2 py-3 text-white'>J'ai trouvé un animal</Link>
                </div>
                <div className="mb-3 row justify-content-center">
                    <Link to="/confirm" className='btn btn-success col-md-4 py-3 m-2 text-white'>Je veux confirmer une annonce</Link>
                    <Link to="/delete" className='btn btn-secondary col-md-4 py-3 m-2 text-white'>Je veux supprimer une annonce</Link>
                </div>

            </div>

        </div>
    )
}

export default Home