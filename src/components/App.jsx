import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AddPetForm from './AddPetForm.jsx';
import EmailConfirmationForm from './EmailConfirmationForm.jsx';
import DeleteConfirmationForm from './DeleteConfirmationForm.jsx';
import Home from './Home.jsx'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/confirm" element={<EmailConfirmationForm />} />
                <Route path="/delete" element={<DeleteConfirmationForm />} />
                <Route path="/add" element={<AddPetForm />} />
            </Routes>
        </HashRouter>
    )
}

export default App