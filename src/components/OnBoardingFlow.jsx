import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

const OnBoardingFlow = ({ children }) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate()


    const goToNext = () => {
        if (currentIndex < 2)
            setCurrentIndex(currentIndex + 1);
    }

    const goToPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            navigate("/")
        }
    }


    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext, goToPrev, onboardingData, setOnboardingData });
    }

    return currentChild;
}

export default OnBoardingFlow