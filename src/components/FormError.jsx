import React from 'react'

function FormError({ message }) {
    return (
        <div className="row mt-3">
            <div className="col-sm-8 offset-sm-2 alert-danger alert">
                {message}
            </div>
        </div>
    )
}

export default FormError