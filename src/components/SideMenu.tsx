import styles from '@/styles/SideMenu.module.css';
import { useState } from 'react';

const SideMenu = () => {

    const [open, openOrClose] = useState(false);

    return (
        <div className={`${styles.sideMenu}`} aria-live="polite">
            <label 
                htmlFor="menu-toggle" 
                className={`${styles.menuIcon}`}
                onClick={() => openOrClose(open => !open)}
                >{!open ? <span>&#9776;</span> : <span>&#10005;</span>}</label>

            {open ? 
                <nav id="sideMenuLinks">
                    <a href="/About" target="_">About</a>
                    <a href="/Blog" target="_">Blog</a>
                    <a href="https://github.com/CurtisGrayeBabin" target="_">GitHub</a>
                    <a href="https://likedin.com/in/curtisbabin/" target="_">LinkedIn</a>
                    <a href="/Music" target="_">Music</a>
                    <a href="/Works" target="_">Works</a>
                </nav>
            : ''}
        </div>
    );
}

export default SideMenu;