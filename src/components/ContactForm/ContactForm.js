import { useState } from 'react';
import styles from './ContactForm.module.scss';
import { Button, Form, Input, Checkbox, Radio, Select } from 'antd';
import { formArr } from '../../utils/consts';
const { TextArea } = Input;
const { Option } = Select;

const ContactForm = ({ onSubmit, onInputChange, value, buttonTitle }) => {
    const [form, setForm] = useState({
        name: value.name || '',
        surname: value.surname || '',
        fatherName: value.fatherName || '',
        email: value.email || '',
        otherInfo: value.otherInfo || '',
        position: value.position || 'Programist',
        gender: value.gender || '',
        check: value.check || false,
    });

    const onChange = (e, field) => {
        if (field) {
            setForm({ ...form, [field]: e });
        } else {
            const value =
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value;
            setForm({ ...form, [e.target.name]: value });
        }
    };

    return (
        <>
            <div className={styles.forms}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={form}
                    autoComplete="off"
                    labelAlign="left"
                    onFinish={onSubmit}
                    className={styles.form}>
                    {formArr.map(({ label, name, type }, index) => (
                        <Form.Item
                            name={name}
                            label={
                                <label className={styles.label}>{label}</label>
                            }
                            htmlFor={name}
                            key={index}
                            rules={[
                                {
                                    required: true,
                                    message: `Please input your ${name}!`,
                                    whitespace: true,
                                },
                            ]}>
                            <Input
                                className={styles.inputBorder}
                                id={name}
                                name={name}
                                type={type}
                                placeholder={label}
                                onChange={e => {
                                    onInputChange(e);
                                    onChange(e);
                                }}
                            />
                        </Form.Item>
                    ))}

                    <Form.Item
                        name="email"
                        label={<label className={styles.label}>Email</label>}
                        htmlFor="email"
                        rules={[
                            {
                                required: true,
                                message: `Please input your email!`,
                            },
                            {
                                type: 'email',
                                message: `Please, input valid email!`,
                            },
                        ]}>
                        <Input
                            className={styles.inputBorder}
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={e => {
                                onInputChange(e);
                                onChange(e);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="otherInfo"
                        label={<label className={styles.label}>Other</label>}
                        htmlFor="otherInfo"
                        rules={[
                            {
                                required: true,
                                message: `Please input your otherInfo!`,
                                whitespace: true,
                            },
                        ]}>
                        <TextArea
                            className={styles.inputBorder}
                            rows={4}
                            column={2}
                            placeholder="Other Information"
                            maxLength={50}
                            id="otherInfo"
                            name="otherInfo"
                            type="text"
                            onChange={e => {
                                onInputChange(e);
                                onChange(e);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="position"
                        label={<label className={styles.label}>Position</label>}
                        htmlFor="position"
                        rules={[
                            {
                                required: true,
                                message: `Please input your position!`,
                                whitespace: true,
                            },
                        ]}>
                        <Select
                            bordered={false}
                            className={styles.inputSelect}
                            id="position"
                            onChange={e => {
                                onInputChange(e, 'position');
                                onChange(e, 'position');
                            }}>
                            <Option value="Programist">Programist</Option>
                            <Option value="Doctor">Doctor</Option>
                            <Option value="Teacher">Teacher</Option>
                            <Option value="Engineer">Engineer</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label={<label className={styles.label}>Gender</label>}
                        htmlFor="gender"
                        rules={[
                            {
                                required: true,
                                message: `Please input your gender`,
                            },
                        ]}>
                        <Radio.Group
                            onChange={e => {
                                onInputChange(e);
                                onChange(e);
                            }}
                            value={form.gender}
                            id="gender"
                            name="gender">
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                        <Checkbox
                            id="check"
                            checked={form.check}
                            name="check"
                            type="checkbox"
                            onChange={e => {
                                onInputChange(e);
                                onChange(e);
                            }}>
                            <p className={styles.txt}>
                                Do you want to know about updates?
                            </p>
                        </Checkbox>
                    </Form.Item>

                    <Button className={styles.btn} htmlType="submit">
                        {buttonTitle}
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default ContactForm;
