import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Contacts from './containers/Contacts/Contacts';
import ContactContextProvider from './context/ContactContext';
import AddUsers from './containers/AddUsers/AddUsers';
import EditUsers from './containers/EditUsers/EditUsers';

const App = () => {
    return (
        <ContactContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/contacts" element={<Contacts />} />
                    <Route
                        path="/"
                        element={<Navigate replace to="/contacts" />}
                    />
                    <Route path="/contacts/new" element={<AddUsers />} />
                    <Route path="contacts/edit/:id" element={<EditUsers />} />
                    <Route
                        path="*"
                        element={<Navigate replace to="/contacts" />}
                    />
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </ContactContextProvider>
    );
};

export default App;
