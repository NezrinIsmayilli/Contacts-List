import { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const ContactContext = createContext();

const ContactProvider = props => {
    const reducer = (users, action) => {
        switch (action.type) {
            case 'add_user':
                return [
                    {
                        id: uuidv4(),
                        name: action.user.name,
                        surname: action.user.surname,
                        fatherName: action.user.fatherName,
                        email: action.user.email,
                        otherInfo: action.user.otherInfo,
                        position: action.user.position,
                        gender: action.user.gender,
                        check: action.user.check,
                    },
                    ...users,
                ];
            case 'remove_user':
                return users.filter(user => user.id !== action.id);
            case 'update_user':
                return users.map(user =>
                    user.id === action.id ? action.updatedUser : user
                );
            default:
                return users;
        }
    };

    const [users, dispatch] = useReducer(reducer, [], () => {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    });

    return (
        <ContactContext.Provider value={{ users, dispatch }}>
            {props.children}
        </ContactContext.Provider>
    );
};
export default ContactProvider;
