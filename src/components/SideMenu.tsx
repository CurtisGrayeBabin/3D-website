import styles from '@/styles/SideMenu.module.css';
import { useState } from 'react';

const SideMenu = () => {

    const [open, openOrClose] = useState(false);

    const toggleMenu = () => {
        openOrClose(open => !open);
      };

    return (
        <div className={`${styles.sideMenu}`} aria-live="polite">
            <label 
                htmlFor="menu-toggle" 
                className={`${styles.menuIcon}`}
                onClick={() => toggleMenu()}
                >{!open ? <span>&#9776;</span> : <span>&#10005;</span>}</label>

            {/* gracefull slide-in */}
            <nav className={open ? `${styles.open}` : `${styles.close}`}>
                <ul>
                    <li><a href="/About" target="_">About</a></li>
                    <li><a href="/Blog" target="_">Blog</a></li>
                    <li><a href="https://github.com/CurtisGrayeBabin" target="_">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/curtisbabin/" target="_">LinkedIn</a></li>
                    <li><a href="/Music" target="_">Music</a></li>
                    <li><a href="/Works" target="_">Works</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideMenu;