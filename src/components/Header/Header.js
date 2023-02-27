import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ title, link }) => {
    return (
        <header className={styles.header}>
            <Link to="/contacts">
                <h3 className={styles.title}>Contacts List</h3>
            </Link>
            <Link to={link} className={styles.addButton}>
                {title}
            </Link>
        </header>
    );
};

export default Header;
