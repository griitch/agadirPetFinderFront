import React, { useState } from 'react';
import AddPetForm from './AddPetForm/index.jsx';
import EmailConfirmationForm from './EmailConfirmationForm/index.jsx';
import DeleteConfirmationForm from './DeleteConfirmationForm/index.jsx';

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
        <button onClick={() => setCurrent("AddPet")}>Add pet</button>
        <button onClick={() => setCurrent("ConfirmDelete")}>delete post</button>
        <button onClick={() => setCurrent("ConfirmAdd")}>Confirm post</button>
        <hr />
        {toRender}
    </div>;
}

export default App;

