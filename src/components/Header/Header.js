import styles from './Header.module.scss';
import Container from '@components/Container';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <p className={styles.headerTitle}>
                    Hyper Bro&apos;s Trading Cards
                </p>

                <p className={styles.headerCart}>
                    <FaShoppingCart /> $0.00
                </p>
            </Container>
        </header>
    );
};

export default Header;
