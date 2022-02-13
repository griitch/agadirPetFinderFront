import React from 'react'
import OnBoardingFlow from './OnBoardingFlow.jsx'
import PetsFilter from './PetsFilter.jsx'
import PetsList from './PetsList.jsx'


const Browse = () => {
    return (
        <OnBoardingFlow>
            <PetsFilter />
            <PetsList />
        </OnBoardingFlow>
    )
}

export default Browse