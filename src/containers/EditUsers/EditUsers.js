import { useContext, useState } from 'react';
import styles from './EditUsers.module.scss';
import { ContactContext } from '../../context/ContactContext';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';

const EditUser = () => {
    const [confirm, setConfirm] = useState(false);
    const { users, dispatch } = useContext(ContactContext);

    const params = useParams();
    const id = params.id;

    const user = users.find(user => user.id === id);

    const [updateUser, setUpdateUser] = useState({
        name: user.name,
        surname: user.surname,
        fatherName: user.fatherName,
        email: user.email,
        otherInfo: user.otherInfo,
        position: user.position,
        gender: user.gender,
        check: user.check,
    });

    const updatedUser = { id, ...updateUser };

    const handleSubmit = () => {
        if (JSON.stringify(user) !== JSON.stringify(updatedUser)) {
            dispatch({
                type: 'update_user',
                id,
                updatedUser,
            });
            setConfirm(true);
            toast.success('Updated Contact!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error('Please, edit a contact!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const onInputChange = (e, field) => {
        setUpdateUser(prev => {
            if (field) {
                return { ...prev, [field]: e };
            } else {
                return {
                    ...prev,
                    [e.target.name]:
                        e.target.type === 'checkbox'
                            ? e.target.checked
                            : e.target.value,
                };
            }
        });
    };

    if (confirm) {
        return <Navigate to={{ pathname: '/' }} />;
    }
    return (
        <>
            <Header title="Contacts" link="/contacts" />
            <p className={styles.informed}>
                Please, Check and Edit your information!
            </p>
            <ContactForm
                onSubmit={handleSubmit}
                onInputChange={onInputChange}
                value={user}
                buttonTitle="Edit Contact"
            />
        </>
    );
};

export default EditUser;
