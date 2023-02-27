import React, { useState } from 'react';
import styles from './InfoModal.module.scss';
import { Button, Modal } from 'antd';
import { info } from '../../assets/icons/crudIcons';

const InfoModal = ({ user }) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const contact = [
        {
            title: 'Name',
            value: user.name,
        },
        {
            title: 'Surname',
            value: user.surname,
        },
        {
            title: "Father's Name",
            value: user.fatherName,
        },
        {
            title: 'Email',
            value: user.email,
        },
        {
            title: 'OtherInfo',
            value: user.otherInfo,
        },
        {
            title: 'Gender',
            value: user.gender,
        },
    ];

    return (
        <>
            <Button className={styles.btn} onClick={showModal}>
                {info}
            </Button>
            <Modal
                className={styles.info}
                title={
                    <p className={styles.infoTitle}>
                        {`Information about ${user.name}`}
                    </p>
                }
                visible={visible}
                onCancel={hideModal}
                footer={null}>
                <>
                    {contact.map(({ title, value }) => (
                        <div className={styles.text} key={title}>
                            <h6>{title}:</h6>
                            <p>{value}</p>
                        </div>
                    ))}

                    <div className={styles.text}>
                        <h6>Position:</h6>
                        <p>
                            {user.position.length > 0
                                ? user.position
                                : 'Programist'}
                        </p>
                    </div>

                    <p className={styles.endtext}>
                        {JSON.stringify(user.check) === 'true'
                            ? 'I want to know about the update.'
                            : "I don't want to know about the update."}
                    </p>
                </>
            </Modal>
        </>
    );
};

export default InfoModal;
