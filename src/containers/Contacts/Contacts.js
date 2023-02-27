import { useContext } from 'react';
import styles from './Contacts.module.scss';
import { Link } from 'react-router-dom';
import { ContactContext } from '../../context/ContactContext';
import InfoModal from '../../components/InfoModal/InfoModal';
import Header from '../../components/Header/Header';
import { Space, Button } from 'antd';
import { deleteModal } from '../../utils/deleteModal';
import { del, edit, defIcon, male, female } from '../../assets/icons/crudIcons';

const Contacts = () => {
    const { users, dispatch } = useContext(ContactContext);

    return (
        <div className={styles.contacts}>
            <Header title="Add Contact" link="/contacts/new" />

            <div className={styles.lists}>
                {users.length > 0 ? (
                    <>
                        {users.map(user => (
                            <div className={styles.list} key={user.id}>
                                <p className={styles.gender}>
                                    {user.gender === 'female' ? female : male}
                                </p>
                                <div className={styles.total}>
                                    <div className={styles.texts}>
                                        <div className={styles.text}>
                                            <h6>Name:</h6>
                                            <p>{user.name}</p>
                                        </div>
                                        <div className={styles.text}>
                                            <h6>Surname:</h6>
                                            <p>{user.surname}</p>
                                        </div>
                                        <div className={styles.text}>
                                            <h6>Father's name:</h6>
                                            <p>{user.fatherName}</p>
                                        </div>
                                        <div className={styles.text}>
                                            <h6>Position:</h6>
                                            <p>
                                                {user.position.length > 0
                                                    ? user.position
                                                    : 'Programist'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles.buttons}>
                                        <Space wrap>
                                            <Button
                                                onClick={() =>
                                                    deleteModal(
                                                        user.id,
                                                        dispatch
                                                    )
                                                }
                                                className={styles.btn}>
                                                {del}
                                            </Button>
                                        </Space>

                                        <Link to={`/contacts/edit/${user.id}`}>
                                            <Button className={styles.btn}>
                                                {edit}
                                            </Button>
                                        </Link>

                                        <Space>
                                            <InfoModal user={user} />
                                        </Space>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <h6 className={styles.default}>
                        <span>{defIcon}</span>
                        There are no Contacts!
                    </h6>
                )}
            </div>
        </div>
    );
};

export default Contacts;
