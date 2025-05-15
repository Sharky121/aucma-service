'use client';

import { useState } from 'react';
import styles from './hamburger.module.scss';
import SideBar from '../side-bar/side-bar';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(true);
    }

    const handleCloseMenu = () => {
        setIsOpen(false);
    }
    
    return (
        <>
            <div className={styles.hamburgerMenu} onClick={handleOpenMenu}>
                <span className='visually-hidden'>Меню</span>
            </div>

            {isOpen && <SideBar onClose={handleCloseMenu} />}
        </>
    )
}

export default Hamburger;