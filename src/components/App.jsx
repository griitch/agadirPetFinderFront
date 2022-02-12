import React, { useState } from 'react';
import AddPetForm from './AddPetForm.jsx';
import EmailConfirmationForm from './EmailConfirmationForm.jsx';
import DeleteConfirmationForm from './DeleteConfirmationForm.jsx';
import "../styles/style.css"

function App() {

    const [current, setCurrent] = useState("AddPet")

    let toRender = null;

    switch (current) {
        case "AddPet":
            toRender = <AddPetForm />;
            break;

        case "ConfirmDelete":
            toRender = <DeleteConfirmationForm />
            break;

        case "ConfirmAdd":
            toRender = <EmailConfirmationForm />
    }


    return <div>
        <button
            className='bg-violet-600 hover:bg-violet-700 px-4 py-2' onClick={() => setCurrent("AddPet")}>Add pet</button>
        <button onClick={() => setCurrent("ConfirmDelete")}>delete post</button>
        <button onClick={() => setCurrent("ConfirmAdd")}>Confirm post</button>
        <hr />
        {toRender}
    </div>
}

export default App;

