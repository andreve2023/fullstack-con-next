import { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={styles.nav}>
            <Image src={menu} alt="menu" className={styles.menu} />
            <div className={styles.navbarLeft}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={styles.navLogo} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.navbarRight}>
                <ul>
                    <button className={styles.navbarEmail} onClick={handleToggle}>
                        platzi@example.com
                    </button>
                    <button className={styles.navbarShoppingCart} onClick={() => setToggleOrders(!toggleOrders)}>
                        <Image src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </button>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;
