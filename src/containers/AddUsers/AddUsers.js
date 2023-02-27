import { useContext, useState } from 'react';
import styles from './AddUsers.module.scss';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ContactContext } from '../../context/ContactContext';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';

const AddUser = () => {
    const { dispatch } = useContext(ContactContext);
    const [confirm, setConfirm] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        fatherName: '',
        email: '',
        otherInfo: '',
        gender: '',
        check: '',
        position: '',
    });

    const onInputChange = (e, field) => {
        if (field) {
            setNewUser({ ...newUser, [field]: e });
        } else {
            const value =
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value;
            setNewUser({ ...newUser, [e.target.name]: value });
        }
    };

    const handleSubmit = () => {
        dispatch({
            type: 'add_user',
            user: { ...newUser },
        });
        setConfirm(true);
        toast.success('Contact Added !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    if (confirm) {
        return <Navigate to={{ pathname: '/' }} />;
    }
    return (
        <div className={styles.addUsers}>
            <Header title="Contacts" link="/contacts" />
            <p className={styles.informed}>Please, input your information!</p>
            <ContactForm
                onSubmit={handleSubmit}
                onInputChange={onInputChange}
                value={[]}
                buttonTitle="Add Contact"
            />
        </div>
    );
};

export default AddUser;
